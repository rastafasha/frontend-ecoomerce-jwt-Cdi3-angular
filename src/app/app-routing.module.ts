import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
    { path: 'about', component: PagesComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'producto/:id', component: ProductoComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'category/:category_name', component: GalleryComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:  HomeComponent },
  // { path: '**', component:  NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
