import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavItem } from '../shared/nav-item.model';
import { ShoppingListService } from '../recipes/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Input() navItems: NavItem[];
  cardItemsCounter: number = 0;
  subscribe: Subscription;

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
    this.subscribe = this.shoppingListService.ingredients$.subscribe(
      (data) => this.cardItemsCounter = data.length
    )
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  collapsed: boolean = true;
}
