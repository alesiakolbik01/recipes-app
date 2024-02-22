import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Recipe } from '../../recipe.model';
import moment from 'moment';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe?: Recipe;

  convertDateToText(date: Date): string {
    return moment(date).fromNow();
  }

  constructor(private recipeService: RecipesService) {}

  onSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
