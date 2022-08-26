import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidertopComponent } from './slidertop/slidertop.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ModalCursosComponent } from './modal-cursos/modal-cursos.component';
// import { CategoriaService } from '../services/categoria.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidertopComponent,
    ModalComponent,
    ModalCursosComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlidertopComponent,
    ModalComponent,
    ModalCursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
