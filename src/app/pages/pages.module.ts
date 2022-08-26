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
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContactComponent,
    GalleryComponent,
    PageComponent,
    ProductoComponent,
    ProductosComponent,
    CursoComponent,
    CursosComponent,
    HomeComponent
  ],
  exports: [
    ContactComponent,
    GalleryComponent,
    PageComponent,
    ProductoComponent,
    ProductosComponent,
    CursoComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
