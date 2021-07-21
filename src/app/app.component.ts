import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeekendBaker by PC';
  values = [1, 2, 3];
  @ViewChild(ProductsComponent)
  productList?: ProductsComponent;

  handleSort(isAsc: boolean) {
    this.productList?.sortProducts(isAsc);
  }
}
