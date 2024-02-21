import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import moment from 'moment';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  private recipesService?: RecipesService;
  private shoppingListService?: ShoppingListService;
  data: Recipe;
  editRecipe: boolean = false;

  constructor() {
    this.recipesService = inject(RecipesService);
    this.shoppingListService = inject(ShoppingListService);
  }

  @Input() set recipeId(value: number) {
    this.data = this.recipesService.getRecipeById(
      value
    );
  }

  @Output() onCloseDetails = new EventEmitter<void>();

  convertDateToText(date: Date): string {
    return moment(date).fromNow();
  }

  handleDeleteRecipe(id: number): void {
    this.recipesService.onDeleteRecipe(id);
    this.onCloseDetails.emit();
  }

  addToSoppingList(){
    this.shoppingListService.addListItems(this.data.ingredients);
  }

}
