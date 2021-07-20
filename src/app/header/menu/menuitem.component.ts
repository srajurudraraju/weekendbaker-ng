import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/types/menuitem';

@Component({
  selector: 'wb-menu-item',
  template: `<li class="nav-item">
    <a
      class="nav-link"
      [ngClass]="{ active: menuItem.active }"
      aria-current="page"
      [href]="menuItem.link"
    >
      {{ menuItem.text }}
    </a>
  </li>`,
})
export class MenuItemComponent {
  @Input()
  menuItem: MenuItem = { text: '' };
  constructor() {}
}
