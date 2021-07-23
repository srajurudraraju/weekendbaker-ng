import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FourOhFourComponent } from '../404/404.component';
import { AboutComponent } from '../about/about.component';
import { ProductDetailsComponent } from '../products/product-details/product.detail.component';
import { ProductReviewsComponent } from '../products/product-details/product.reviews.component';
import { ProductsComponent } from '../products/products.component';

//define your routes - /products, /product/1, /cart
//path matching is first-match strategy
const routes: Route[] = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    children: [
      {
        path: 'details',
        component: ProductDetailsComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '404',
    component: FourOhFourComponent,
  },
  {
    path: 'home',
    redirectTo: 'products',
  },
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: '**',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WBRoutingModule {}
