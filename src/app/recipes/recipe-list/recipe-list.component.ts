import { Component,EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
  private recipesService?: RecipesService;

  constructor() {
    this.recipesService = inject(RecipesService);
  }
  @Output() onClickRecipeDetail = new EventEmitter<number>();
  
  recipes$: Observable <Recipe[]>;
  isShowRecipeForm:boolean = false;

  onClickItemRecipe(resipeId: number):void {
      this.onClickRecipeDetail.emit(resipeId);
  }

  ngOnInit(){
    this.recipes$ = this.recipesService.recipes;
  }

}
