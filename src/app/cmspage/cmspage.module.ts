import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CmspageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ContactFormComponent
   ],
  exports: [
    ContactFormComponent
   ]
})
export class CmspageModule { }
