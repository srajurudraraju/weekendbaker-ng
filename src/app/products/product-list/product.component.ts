import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product',
  template: `<p>{{ product?.name }}</p>
    <p>£{{ product?.price }}</p>`,
})
export class ProductComponent {
  @Input()
  product: Product | null = null;
}
