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

  search: string = '';

  constructor() {}

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }
}
