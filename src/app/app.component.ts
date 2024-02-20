import { Component } from '@angular/core';
import { NavItem } from './shared/nav-item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title:string = 'culinary-recipes-app';
  activeTabId:number = 1;
  tabs: NavItem[] = [
    {name: 'Recipes', id: 1, selector: 'app-recipes'},
    {name: 'Shopping List', id: 2, selector: 'app-shopping-list'},
  ]

  onChangeTabItem(id:number):void{
    this.activeTabId = id;
  }

}
