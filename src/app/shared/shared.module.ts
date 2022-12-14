import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidertopComponent } from './slidertop/slidertop.component';
// import { ModalProductoComponent } from './modal-producto/modal-producto.component';
// import { ModalCursosComponent } from './modal-cursos/modal-cursos.component';
// import { CategoriaService } from '../services/categoria.service';

//pluggins
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { ModalPagoComponent } from '../components/modal-pago/modal-pago.component';
import { AppRoutingModule } from '../app-routing.module';


// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidertopComponent,
    ModalGalleryComponent,
    ModalPagoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlidertopComponent,
    ModalGalleryComponent,
    ModalPagoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPayPalModule,
    NgbModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
