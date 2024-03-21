import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipesService) {}

  recipes$: Observable<Recipe[]>;

  ngOnInit() {
    this.recipes$ = this.recipesService.object;
  }
}
