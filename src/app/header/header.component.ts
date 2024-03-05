import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../shared/nav-item.model';
import { ShoppingListService } from '../recipes/services/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() navItems: NavItem[];

  collapsed: boolean = true;
}
