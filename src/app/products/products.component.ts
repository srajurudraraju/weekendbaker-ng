import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: ` <wb-filter (onSort)="sortProducts($event)"> </wb-filter>
    <wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private service: ProductService) {}
  products: Product[] = [];
  productSubscription?: Subscription;

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }
  }

  ngOnInit() {
    this.productSubscription = this.service
      .getAllProducts()
      .subscribe((res) => {
        this.products = res;
      });
  }

  ngOnDestroy() {
    //Cleanup
    this.productSubscription?.unsubscribe();
  }
}
