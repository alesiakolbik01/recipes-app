import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../recipes/services/recipes.service';
import { Ingredient } from '../shared/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeFormComponent implements OnInit {
  private recipesService?: RecipesService;
  recipeData: {
    name: string;
    description: string;
    imagePath: string;
    id?: number;
    time?: number;
  } = {
    name: '',
    description: '',
    imagePath: ''
  };

  ingredients: Ingredient[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.recipesService = inject(RecipesService);
  }

  resipeId?: number;
  editMode: boolean = false;

  ngOnInit() {
    this.resipeId = +this.route.snapshot.params['id'];
    this.editMode = this.route.snapshot.params['id'] !== undefined;
    if (this.resipeId) {
      this.recipeData = {...this.recipesService.getRecipeById(this.resipeId)};
    }
  }

  onFormSubmit(f: NgForm): void {
    if (f.valid) {
      if (this.resipeId) {
        this.recipesService.onUpdateRecipe(f.value, this.resipeId);
        this.router.navigate(['recipes', this.resipeId]);
      } else {
        this.recipesService.onAddNewRecipe(f.value);
        this.router.navigate(['recipes']);
      }
    }
  }

  addIngredient(item: any){
    this.ingredients.push(item);
  }

  deleteIngredient(name: string){
    this.ingredients = this.ingredients.filter(item => item.name !== name);
  }

}
