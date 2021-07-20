import { Component } from '@angular/core';
import { MenuItem } from '../types/menuitem';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu: MenuItem[] = [
    {
      text: 'About',
      link: '/about',
      active: true,
    },
    {
      text: 'Products',
      link: '/products',
    },
    {
      text: 'Order',
      link: '/order',
    },
  ];

  isLoggedIn: boolean = false;

  search: string = '';

  constructor() {}

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }
}
