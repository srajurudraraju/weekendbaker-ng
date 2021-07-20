import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product-list',
  template: `<div class="container product-list">
    <wb-product
      [product]="product"
      *ngFor="let product of products"
    ></wb-product>
  </div>`,
})
export class ProductListComponent {
  @Input()
  products: Product[] = [];
}
