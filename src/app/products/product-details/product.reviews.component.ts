import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'wb-product-reviews',
  template: `<div class="card h-100" style="width: 80%;margin:0 auto;">
    <a [routerLink]="detailsLink">Details</a>
    <div class="card-body">
      <h5 class="card-title">Reviews</h5>
      <div class="card-text">
        <p *ngFor="let review of reviews">{{ review }}</p>
      </div>
    </div>
  </div>`,
})
export class ProductReviewsComponent implements OnInit {
  reviews: string[] = [];
  detailsLink?: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(
      (params) => (this.detailsLink = `/product/${params['id']}/details`)
    );
  }
}
