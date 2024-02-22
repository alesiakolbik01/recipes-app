import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChildren,
  inject,
  QueryList,
  ElementRef,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import moment from 'moment';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  editRecipe: boolean = false;
  selectedIngredientsList: Ingredient[] = [];

  @Input() data: Recipe;
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  @Output() onCloseDetails = new EventEmitter<void>();

  constructor(
    private recipesService?: RecipesService,
    private shoppingListService?: ShoppingListService
  ) {}

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
    this.onCloseDetails.emit();
  }

  addToSoppingList() {
    this.shoppingListService.addListItems(this.selectedIngredientsList);
    this.selectedIngredientsList = [];
    this.uncheckAllCheckboxesForm();
  }

  close(){
    this.recipesService.selectedRecipe.emit(null);
  }
}
