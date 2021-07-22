import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'wb-filter',
  template: `<button class="btn btn-link" (click)="sortAsc()">Sort Asc</button>
    <button class="btn btn-link" (click)="sortDesc()">Sort Desc</button>
    <button
      class="btn btn-link"
      (click)="filterByCategory(category)"
      *ngFor="let category of categories"
    >
      {{ category }}
    </button>
    <button class="btn btn-link" (click)="filterByCategory()">All</button>`,
})
export class FilterComponent {
  categories: string[] = ['Cake', 'Other'];
  constructor(private service: ProductService) {}
  //Event emitter to emit the onSort event
  //onSort emits true for ascending
  //and false for descending
  @Output()
  onSort: EventEmitter<boolean> = new EventEmitter();

  sortAsc() {
    this.onSort.emit(true);
  }

  sortDesc() {
    this.onSort.emit(false);
  }

  filterByCategory(category?: string) {
    this.service.applyFilter(category);
  }
}
