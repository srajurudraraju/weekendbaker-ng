import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeekendBaker by PC';
  values = [
    {
      id: 1,
      text: 'One',
    },
    {
      id: 2,
      text: 'Two',
    },
  ];
  @ViewChild(ProductsComponent)
  productList?: ProductsComponent;

  handleSort(isAsc: boolean) {
    this.productList?.sortProducts(isAsc);
  }
}
