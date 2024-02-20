import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([
    {
      id: 1,
      name: 'Test recipe',
      description: 'this recipe description',
      imagePath:
        'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
      createDate: new Date(),
    },
    {
      id: 2,
      name: 'Spagetti',
      description:
        'Mięso mielone wieprzowo-wołowe wrzucić na rozgrzaną oliwę. Dodajemy szczyptę soli i trochę pieprzu, następnie suszoną bazylię i oregano. Gdy mięso będzie już dobre, najlepiej by były malutkie kawałeczki, a nie sklejone, dodajemy przecier pomidorowy. Próbujemy i wszystko doprawiamy, jeżeli jest taka potrzeba. W dużym garnku gotujemy wodę na makaron, gdy zacznie wrzeć dodajemy sól i łyżkę oliwy. Pilnujemy by makaron się nie rozgotował (ma być al-dente). Gotowy makaron układamy na porcje, na duże talerze. Na wierzch dodajemy sos. Wszystko posypujemy startym parmezanem i dodajemy świeże listki bazylii.',
      createDate: new Date(),
      imagePath: 'https://www.patee.ru/r/x6/0a/bb/2b/960m.jpg',
    },
    {
      id: 3,
      name: 'Przekąski na grilla',
      description: `Przekąski na grilla  - proste i smakowite pomysły. Przekąski z niedrogich i łatwo dostępnych składników

    W sezonie letnim grillowanie to jedna z ulubionych form spędzania wolnego czasu i przygotowywania posiłków na świeżym powietrzu.  Polacy kochają spotkania przy grillu, bo lubią dobrą kuchnię, spotkania z rodziną i znajomymi i relaks, jaki daje jedzenie  poza domem w otoczeniu przyrody. Nie wyobrażamy sobie długiego weekendu bez spotkania przy grillu. Jak mówią statystyki, w lecie grillujemy przynajmniej 1 raz w tygodniu
    
    Co najczęściej jemy z grilla? Karkówkę, kiełbasę i kurczaka. A tym daniom mięsnym towarzyszy piwo i woda.  Do dań mięsnych podajemy pieczywo, sosy oraz sałatki. Jednak od rozpalenia grilla do zdjęcia z rusztu soczystego kawałka karkówki upływa trochę czasu. Kiszki grają marsza, a głodni uczestnicy z niecierpliwością czekają na chrupiące skrzydełka czy udka. Żeby umilić czas oczekiwania na dania główne, przygotuj przekąski na grilla, które wyciszą głód i będą smacznym wstępem do uczty grillowej.`,
      createDate: new Date(),
      imagePath:
        'https://cdn.shopify.com/s/files/1/0577/4239/3541/files/bruschetta-with-soft-cheese-and-grilled-red-paprik-2023-04-06-18-54-15-utc_1.jpg?v=1688625483',
    },
  ]);

  recipes$: Observable<Recipe[]> = this.recipes.asObservable();

  onDeleteRecipe(id: number): void {
    this.recipes$.pipe(take(1)).subscribe((val) => {
      const newRecipesList = val.filter((item) => item.id !== id);
      this.recipes.next(newRecipesList);
    });
  }

  onAddNewRecipe(dataForm: any) {
    let itemsLength: any;
    this.recipes$.pipe(take(1)).subscribe((val) => {
      itemsLength = this.recipes$.subscribe((arr) => arr.length);
      let newRecipe = {
        ...dataForm,
        createDate: new Date(),
        id: itemsLength + 1,
      };

      const newRecipesList = [...val, newRecipe];
      this.recipes.next(newRecipesList);
    });
  }

  getRecipeById(id: number) {
    let recipe: Recipe;
    this.recipes$.pipe(take(1)).subscribe((val) => {
      recipe = val.find((item) => item.id === id);
    });
    return recipe;
  }

  onUpdateRecipe(dataForm: any, id: number): void {
    this.recipes$.pipe(take(1)).subscribe((val) => {
      let newRecipeList = [...val];
      let editableItem = newRecipeList.find((item) => item.id === id);
      editableItem = {
        ...editableItem,
        ...dataForm,
        modifiedDate: new Date(),
      };

      this.recipes.next(newRecipeList);// doesn't works, the array doesn't updating
    });
  }
}
