import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageComponent } from './page/page.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CmspageModule } from '../cmspage/cmspage.module';


import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';

//pluggins
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './faq/faq.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
// import { NgxSpinnerModule } from "ngx-spinner";
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

// formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
// paginacion
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ContactComponent,
    GalleryComponent,
    PageComponent,
    ProductoComponent,
    ProductosComponent,
    CursoComponent,
    CursosComponent,
    HomeComponent,
    CarritoComponent,
    FaqComponent,
    BlogListComponent,
    BlogDetailComponent,
    PrivacypolicyComponent,
    CartCheckoutComponent
  ],
  exports: [
    ContactComponent,
    GalleryComponent,
    PageComponent,
    ProductoComponent,
    ProductosComponent,
    CursoComponent,
    CursosComponent,
    HomeComponent,
    CarritoComponent,
    FaqComponent,
    BlogListComponent,
    BlogDetailComponent,
    PrivacypolicyComponent,
    CartCheckoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    NgxPayPalModule,
    NgbModule,
    CmspageModule,
    // NgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
