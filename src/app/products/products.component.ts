import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'wb-products',
  template: `<wb-product-list
    [products]="products"
    [test]="testvalue"
  ></wb-product-list>`,
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductService) {}
  products: Product[] = [];

  testvalue: string = 'testing';

  sortProducts(isAsc: boolean) {
    if (isAsc) {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => b.price - a.price);
    }

    this.testvalue = this.testvalue + Math.random();
  }

  ngOnInit() {
    this.products = this.service.getAllProducts();

    this.service.obsProducts.subscribe(
      (prods) => {
        console.log('Recieved new products: ', prods);
        this.products = prods;
      },
      (err) => console.log('Error', err),
      () => console.log('Complete')
    );
  }
}
