import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../shared/nav-item.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() navItems: NavItem[];
  @Input() activeTabId: number;
  @Output() onChangeTabItem = new EventEmitter<number>();

  

  collapsed:boolean = true;

  handleClickItemNav(id: number){
    this.onChangeTabItem.emit(id);
  }
}
