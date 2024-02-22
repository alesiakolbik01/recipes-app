import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
