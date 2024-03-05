import { Component, OnInit, inject } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../recipes/services/shopping-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  protected shoppingListService?: ShoppingListService;
  ingredients$: Observable<Ingredient[]>;
  isShowForm: boolean = false;

  constructor() {
    this.shoppingListService = inject(ShoppingListService);
  }

  ngOnInit() {
    this.ingredients$ = this.shoppingListService.subject;
  }

  decreaseAmountIngredient(name: string, value: number) {
    if (value < 1) return;
    this.shoppingListService.decreaseAmount(name);
  }

  increaseAmountIngredient(name: string) {
    this.shoppingListService.increaseAmount(name);
  }
}
