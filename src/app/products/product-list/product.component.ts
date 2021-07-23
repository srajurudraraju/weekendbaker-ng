import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product',
  template: `<div class="card h-100" style="width: 18rem;">
    <img [src]="product?.image" class="card-img-top" [alt]="product?.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product?.name }}</h5>
      <p class="card-text">£{{ product?.price }}</p>
      <button class="btn btn-link" (click)="goToDetail(product?.id)">
        Details
      </button>
    </div>
  </div>`,
})
export class ProductComponent {
  @Input()
  product: Product | null = null;

  constructor(private router: Router) {}
  goToDetail(id?: number) {
    if (id) {
      //this.router.navigateByUrl(`/product/${id}`);
      this.router.navigate(['product', id, 'details']);
    }
  }
}
