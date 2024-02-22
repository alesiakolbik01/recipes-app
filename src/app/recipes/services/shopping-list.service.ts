import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { BehaviorSubject, Observable, take } from 'rxjs';

Injectable()
export class ShoppingListService {
  ingredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([
    { name: 'tomat', amount: 1},
    { name: 'onion', amount: 1},
  ]);

  deleteItem(name: string): void {
    this.ingredients$.pipe(take(1)).subscribe((val) => {
      const newShoppingList = val.filter((item) => item.name !== name);
      this.ingredients.next(newShoppingList);
    });
  }

  addItem(dataForm: any) {
    this.ingredients$.pipe(take(1)).subscribe((val) => {
      const item = val.find(ing => ing.name === dataForm.name);
      let newShoppingList: Ingredient [];
     
      if(item){
        item.amount = item.amount + dataForm.amount;
        newShoppingList = [...val];
      }
      else{
        const newItem: Ingredient = item ?  {...dataForm, amount: item.amount + dataForm.amount} : {...dataForm};
        newShoppingList = [...val, newItem];
      }
     
      this.ingredients.next(newShoppingList);
    });
  }

  addListItems(items: Ingredient[]){
    this.ingredients$.pipe(take(1)).subscribe((val) => {
      const mergeListsObj = [...val].concat(items).reduce(
        (acc, item) => {
          acc[item.name] = acc[item.name] ? (acc[item.name] + item.amount) : item.amount;
          return acc;
        }, {}
      );
      const newShoppingList: Ingredient[] = Object.keys(mergeListsObj).map(key => {
        return {
          name: key,
          amount: mergeListsObj[key]
        }
      });

      this.ingredients.next(newShoppingList);
    });
  }

  ingredients$: Observable<Ingredient[]> = this.ingredients.asObservable();
}
