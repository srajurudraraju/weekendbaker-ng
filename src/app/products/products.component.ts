import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: `<wb-product-list [products]="products"></wb-product-list>`,
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductService) {}
  products: Product[] = [];

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }
  }

  ngOnInit() {
    this.service.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
