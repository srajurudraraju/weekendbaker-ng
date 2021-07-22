import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly allProducts: Product[] = [];

  obsProducts: Subject<Product[]> = new Subject();

  constructor() {
    this.allProducts = [
      {
        name: 'Cheesecake',
        price: 20.99,
        category: 'Cake',
      },
      {
        name: 'Cupcakes',
        price: 4.99,
        category: 'Other',
      },
      {
        name: 'Bento Cakes',
        price: 14.99,
        category: 'Cake',
      },
      {
        name: 'Cookies',
        price: 5.99,
        category: 'Other',
      },
      {
        name: 'Brownies',
        price: 5.99,
        category: 'Other',
      },
    ];

    this.obsProducts.next(this.allProducts); //publish for the first time
  }

  getAllProducts() {
    return this.allProducts;
  }

  applyFilter(category?: string) {
    if (category) {
      this.obsProducts.next(
        this.allProducts.filter((p) => p.category === category)
      );
    } else {
      this.obsProducts.next(this.allProducts);
    }
  }
}
