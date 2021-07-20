import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: `<wb-filter (onSort)="this.onSort.emit($event)"></wb-filter>
    <wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent {
  @Input()
  products: Product[] = [];

  @Output()
  onSort: EventEmitter<boolean> = new EventEmitter();
}
