import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuItemComponent } from './header/menu/menuitem.component';
import { MenuComponent } from './header/menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/productlist.component';
import { ProductComponent } from './products/product-list/product.component';
import { FilterComponent } from './products/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    MenuItemComponent,
    MenuComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
