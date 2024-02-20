import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  OnChanges,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import moment from 'moment';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  private recipesService?: RecipesService;
  data: Recipe;
  editRecipe: boolean = false;

  constructor() {
    this.recipesService = inject(RecipesService);
  }

  ngOnInit() {

  }

  @Input() set recipeId(value: number) {
    this.data = this.recipesService.getRecipeById(
      value
    );
  }

  @Output() onCloseDetails = new EventEmitter<void>();

  ngOnChanges(changes: any) {
    
  }

  convertDateToText(date: Date): string {
    return moment(date).fromNow();
  }

  handleDeleteRecipe(id: number): void {
    this.recipesService.onDeleteRecipe(id);
    this.onCloseDetails.emit();
  }
}
