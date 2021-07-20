import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/types/menuitem';

@Component({
  selector: 'wb-menu',
  template: `<ul class="navbar-nav">
    <wb-menu-item
      [menuItem]="menuItem"
      *ngFor="let menuItem of menu"
    ></wb-menu-item>
  </ul>`,
})
export class MenuComponent {
  @Input()
  menu: MenuItem[] = [];
  constructor() {}
}
