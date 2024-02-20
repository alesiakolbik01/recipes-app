import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Recipe } from '../../recipe.model';
import moment from 'moment';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  @Input() recipe?: Recipe

  convertDateToText(date:Date):string {
    return moment(date).fromNow();
  }
}
