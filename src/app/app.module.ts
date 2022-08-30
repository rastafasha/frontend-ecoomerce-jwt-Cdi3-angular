import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

//editor
import { CKEditorModule } from 'ckeditor4-angular';


// modulos
import { OrderModule } from 'ngx-order-pipe';
import {PipesModule} from './pipes/pipes.module'
import {PagesModule} from './pages/pages.module'
import { SharedModule } from './shared/shared.module';
import {ComponentsModule} from './components/components.module';
import {CmspageModule} from './cmspage/cmspage.module';
import {AuthModule} from './auth/auth.module';

import { NotfoundComponent } from './notfound/notfound.component';


//servicios

import { httpInterceptorProviders } from './http-interceptors';
import { CategoryService } from './services/category.service';
import { SidebarService } from './services/sidebar.service';
import { SliderService } from './services/slider.service';
import { ProductoService } from './services/producto.service';
import { CursoService } from './services/curso.service';
import { BlogService } from './services/blog.service';
import { ConfiguracionService } from './services/configuracion.service';
import { MessageService } from './services/message.service';
import { StorageService } from './services/storage.service';
import { GalleryService } from './services/gallery.service';


//pluggins
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    OrderModule,
    CKEditorModule,
    ComponentsModule,
    PipesModule,
    PagesModule,
    SharedModule,
    NgbModule,
    NgxPayPalModule,
    AuthModule,

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CmspageModule,
    NgbModule,


  ],

  providers: [
    // httpInterceptorProviders,
    CategoryService,
    SidebarService,
    SliderService,
    ProductoService,
    CursoService,
    BlogService,
    ConfiguracionService,
    MessageService,
    StorageService,
    GalleryService,
    NgbActiveModal
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
