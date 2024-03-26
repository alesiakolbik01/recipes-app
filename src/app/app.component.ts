import { Component } from '@angular/core';
import { NavItem } from './shared/nav-item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tabs: NavItem[] = [
    {name: 'Recipes', id: 1, link: '/'},
    {name: 'Shopping List', id: 2, link: '/shopping-list'},
  ]

}
