import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CartCheckoutComponent } from './pages/cart-checkout/cart-checkout.component';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages/pages/pages.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PageComponent } from './pages/page/page.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
    { path: 'about', component: PagesComponent},
    { path: 'about/:id', component: PagesComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'cursos/:id', component: CursoComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'productos/:id', component: ProductoComponent},
    { path: 'gallery', component: GalleryComponent},
    // { path: 'category/:category_name', component: GalleryComponent},
    // { path: 'category/:category_name/:cod_prod', component: GalleryComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cart', component: CarritoComponent},
    { path: 'checkout', component: CartCheckoutComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'blogs', component: BlogListComponent},
    { path: 'blog/:id', component: BlogDetailComponent},
    { path: '404', component: NotfoundComponent},
    { path: 'privacy-policy', component: PrivacypolicyComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    // { path: 'myaccount', component: PageComponent, canActivate: [ AuthGuard ]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:  HomeComponent },
  // { path: '**', component:  NopagefoundComponent },
  // { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data:{tituloPage:'Mantenimiento de Usuarios '} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
