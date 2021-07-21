import { Component } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: `<wb-product-list
    [products]="products"
    [test]="testvalue"
  ></wb-product-list>`,
})
export class ProductsComponent {
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

  testvalue: string = 'testing';

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }

    this.testvalue = this.testvalue + Math.random();
  }
}
