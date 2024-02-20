import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'tomat', amount: 1, id: 1 },
    { name: 'onion', amount: 1, id: 2 },
  ];

  addItem(item: Ingredient): void {
    console.log(item)
    this.ingredients.push(item);
  }

  deleteItem(id: number): void {
    this.ingredients = this.ingredients.filter((item) => item.id !== id);
  }
}
