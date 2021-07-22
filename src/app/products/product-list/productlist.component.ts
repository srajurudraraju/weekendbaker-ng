import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product-list',
  template: `<div
    class="container product-list d-flex flex-wrap justify-content-around"
  >
    <wb-product
      class="mb-3"
      [product]="product"
      *ngFor="let product of products"
    ></wb-product>
  </div>`,
})
export class ProductListComponent {
  @Input()
  products: Product[] = [];
}
