import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss',
})
export class ShoppingEditComponent {
  @Output() handleAddItem = new EventEmitter<Ingredient>();
  nameInput: string = '';
  amountInput: number;

  clearForm(): void {
    this.nameInput = '';
    this.amountInput = undefined;
  }

  addItem(f: NgForm): void {
    if(f.form.valid){
      this.handleAddItem.emit({
        id: new Date().getTime(),
        name: this.nameInput,
        amount: this.amountInput,
      });
      f.form.reset();
    }
   
  }

}
