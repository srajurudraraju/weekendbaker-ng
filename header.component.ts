import { Component } from '@angular/core';
import { MenuItem } from '../types/menuitem';
import { SubMenuItem } from '../types/submenu';
import { SubMenuComponent } from './menu/submenu.component';

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
      dropDownTarget: "",
      active: true,
    },
    {
      text: 'Products',
      dropDownTarget: "productsTarget",
      subMenuList: ['Product 1', 'Product 2', 'Product 3'],
      isDropDownMenu: true,
      link: '/products',
    },
    
    {
      text: 'Order',
      dropDownTarget: "",
      link: '/order',
    },
  ];
  // submenu: SubMenuItem[]= [
  //     {
  //       text: 'Mobiles',
  //       link: '/products',
  //     },
  //     {
  //       text: 'TV',
  //       link: '/products',
  //     },
  // ];

  isLoggedIn: boolean = false;

  search: string = '';

  constructor() {}

  doSearch() {
    console.log(`Searching for ${this.search}`);
  }
}
