import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/services/recipes.service';

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
  } = {
    name: '',
    description: '',
    imagePath: '',
  };

  constructor() {
    this.recipesService = inject(RecipesService);
  }

  @Input() editingResipeId?: number;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    if (this.editingResipeId) {
      this.recipeData = {...this.recipesService.getRecipeById(this.editingResipeId)};
    }
  }

  onFormSubmit(f: NgForm): void {
    if (f.valid) {
      if (this.editingResipeId) {
        this.recipesService.onUpdateRecipe(f.value, this.editingResipeId);
      } else {
        this.recipesService.onAddNewRecipe(f.value);
      }
      this.hide.emit();
    }
  }

}