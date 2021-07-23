import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'wb-product-detail',
  template: ` <div class="card h-100" style="width: 80%;margin:0 auto;">
    <a [routerLink]="reviewsLink">Reviews</a>
    <img [src]="product?.image" class="card-img-top" [alt]="product?.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product?.name }}</h5>
      <p class="card-text">£{{ product?.price }}</p>
    </div>
    <router-outlet> </router-outlet>
  </div>`,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  subscription?: Subscription;
  reviewsLink?: string;
  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //receive the parameter from route
    this.route.params.subscribe((params) => {
      let id = params['id'];
      //call API to get the data
      this.subscription = this.service.getProduct(id).subscribe(
        (res) => {
          this.reviewsLink = `/product/${id}/reviews`;
          this.product = res;
        },
        (err) => {
          if (err.status === 404) {
            //to 404 page
            this.router.navigate(['404']);
          } else {
            //to 500 page
          }
        }
      );
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
