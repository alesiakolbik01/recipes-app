import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes:Recipe[] = [{
    id: 1,
    name: "Test recipe",
    description: "this recipe description",
    imagePath: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
    createDate: new Date()
  }];
}
