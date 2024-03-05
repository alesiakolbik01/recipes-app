import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

Injectable();
export class ShoppingListService {
  subject: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([
    { name: 'tomat', amount: 1 },
    { name: 'onion', amount: 1 },
  ]);

  deleteItem(name: string): void {
    this.ingredients$.pipe(take(1)).subscribe((array: Ingredient[]) => {
      const newShoppingList = array.filter((item) => item.name !== name);
      this.subject.next(newShoppingList);
    });
  }

  addItem(dataForm: any) {
    this.ingredients$.pipe(take(1)).subscribe((array: Ingredient[]) => {
      const item = array.find((ing) => ing.name === dataForm.name);
      let newShoppingList: Ingredient[];

      if (item) {
        item.amount = item.amount + dataForm.amount;
        newShoppingList = [...array];
      } else {
        const newItem: Ingredient = item
          ? { ...dataForm, amount: item.amount + dataForm.amount }
          : { ...dataForm };
        newShoppingList = [...array, newItem];
      }

      this.subject.next(newShoppingList);
    });
  }

  addListItems(items: Ingredient[]) {
    this.ingredients$.pipe(take(1)).subscribe((array: Ingredient[]) => {
      const mergeListsObj = [...array]
        .concat(items)
        .reduce((acc: {}, item: { name: string; amount: number }) => {
          acc[item.name] = acc[item.name]
            ? acc[item.name] + item.amount
            : item.amount;
          return acc;
        }, {});
      const newShoppingList: Ingredient[] = Object.keys(mergeListsObj).map(
        (key: string) => {
          return {
            name: key,
            amount: mergeListsObj[key],
          };
        }
      );

      this.subject.next(newShoppingList);
    });
  }

  decreaseAmount(name: string) {
    this.ingredients$.pipe(take(1)).subscribe((array: Ingredient[]) => {
      const ingredientIndex: number = array.findIndex((item: Ingredient) => {
        return item.name === name;
      });

      if (ingredientIndex !== -1) {
        const ingredientAmount: number = array[ingredientIndex].amount;
        array[ingredientIndex].amount = ingredientAmount - 1;
      }
    });
  }

  increaseAmount(name: string) {
    this.ingredients$.pipe(take(1)).subscribe((array: Ingredient[]) => {
      const ingredientIndex: number = array.findIndex((item: Ingredient) => {
        return item.name === name;
      });

      if (ingredientIndex !== -1) {
        const ingredientAmount: number = array[ingredientIndex].amount;
        array[ingredientIndex].amount = ingredientAmount + 1;
      }
    });
  }

  ingredients$: Observable<Ingredient[]> = this.subject.asObservable();
  counter$: Observable<number> = this.ingredients$.pipe(
    map((arr) => arr.length)
  );
}
