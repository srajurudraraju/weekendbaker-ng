import { Component } from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeekendBaker by PC';
  products: Product[] = [
    {
      name: 'Cheesecake',
      price: 20.99,
    },
    {
      name: 'Cupcakes',
      price: 4.99,
    },
    {
      name: 'Bento Cakes',
      price: 14.99,
    },
    {
      name: 'Cookies',
      price: 5.99,
    },
  ];

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }
  }
}
