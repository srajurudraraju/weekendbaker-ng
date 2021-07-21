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
  template: `<div class="container product-list">
    <wb-product
      [product]="product"
      *ngFor="let product of products"
    ></wb-product>
  </div>`,
})
export class ProductListComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  products: Product[] = [];

  @Input()
  test: string = '';

  //Only invoked if it's a data bound component
  ngOnChanges(changes: SimpleChanges) {
    console.log('NgOnChanges:', changes);
  }

  //Only Once
  ngOnInit() {
    console.log('NgOnInit');
  }

  //To run manual change detections
  ngDoCheck() {
    //run your own logic to trigger change detection
    console.log('ngDoCheck');
  }

  //Only once
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  //After every ngDoCheck
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  //After view is initialized - Only once
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  //After every ngAfterContentChecked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  //Only once - just before component is unmounted - cleanups
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
