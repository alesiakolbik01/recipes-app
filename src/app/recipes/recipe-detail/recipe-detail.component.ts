import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import moment from 'moment';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  editRecipe: boolean = false;
  selectedIngredientsList: Ingredient[] = [];

  data: Recipe = null;
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;

  constructor(
    private recipesService?: RecipesService,
    private shoppingListService?: ShoppingListService,
    private router?: Router,
    private route?: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.data = this.recipesService.getRecipeById(+params['id']);
    })
  }

  onSelectedItem(newIng: Ingredient, isChecked: boolean) {
    if (isChecked) {
      this.selectedIngredientsList.push(newIng);
    } else {
      this.selectedIngredientsList = this.selectedIngredientsList.filter(
        (item) => item.name !== newIng.name
      );
    }
  }

  uncheckAllCheckboxesForm() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  convertDateToText(date: Date): string {
    return moment(date).fromNow();
  }

  handleDeleteRecipe(id: number): void {
    this.recipesService.onDeleteRecipe(id);
    this.close();
  }

  addToSoppingList() {
    this.shoppingListService.addListItems(this.selectedIngredientsList);
    this.selectedIngredientsList = [];
    this.uncheckAllCheckboxesForm();
  }

  close(){
    this.recipesService.selectedRecipe.emit(null);
    this.router.navigate(['/recipes']);
  }
}
