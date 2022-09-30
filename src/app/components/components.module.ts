import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsFeaturedComponent } from './products-featured/products-featured.component';
import { PageFeaturedComponent } from './page-featured/page-featured.component';
import { BlogFeaturedComponent } from './blog-featured/blog-featured.component';

import { RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';

//pluggins
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    // FooterComponent,
    // HeaderComponent,
    SliderComponent,
    ProductsFeaturedComponent,
    PageFeaturedComponent,
    BlogFeaturedComponent,
    CartItemComponent,
    CartComponent,
  ],

  exports: [
    SliderComponent,
    ProductsFeaturedComponent,
    PageFeaturedComponent,
    BlogFeaturedComponent,
    CartItemComponent,
    CartComponent,

  ],
  imports: [
    CommonModule,
    // PipesModule,
    SharedModule,
    RouterModule,
    NgxPayPalModule,
    NgbModule
  ],
})
export class ComponentsModule { }
