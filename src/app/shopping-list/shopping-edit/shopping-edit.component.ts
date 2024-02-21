import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss',
})
export class ShoppingEditComponent {
  @Output() handleAddItem = new EventEmitter<Ingredient>();
  @Output() hide?: EventEmitter<void> = new EventEmitter<void>();
  @Input() btnHide: boolean;
  nameInput: string = '';
  amountInput: number;

  clearForm(): void {
    this.nameInput = '';
    this.amountInput = undefined;
  }

  addItem(f: NgForm): void {
    if(f.form.valid){
      this.handleAddItem.emit({
        name: this.nameInput,
        amount: this.amountInput,
      });
      f.form.reset();
    }
   
  }

}
