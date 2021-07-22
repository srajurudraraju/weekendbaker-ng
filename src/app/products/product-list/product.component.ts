import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product',
  template: `<div class="card h-100" style="width: 18rem;">
    <img [src]="product?.image" class="card-img-top" [alt]="product?.title" />
    <div class="card-body">
      <h5 class="card-title">{{ product?.title }}</h5>
      <p class="card-text">£{{ product?.price }}</p>
    </div>
  </div>`,
})
export class ProductComponent {
  @Input()
  product: Product | null = null;
}
