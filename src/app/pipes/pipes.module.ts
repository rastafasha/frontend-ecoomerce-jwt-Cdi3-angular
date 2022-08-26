import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapeHtmlPipe } from './keep-html.pipe';
import {KeysPipe} from './keys.pipe';
import {ImagenPipe} from './imagen-pipe.pipe';

@NgModule({
  declarations: [
    EscapeHtmlPipe,
    KeysPipe,
    ImagenPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    EscapeHtmlPipe,
    KeysPipe,
    ImagenPipe

  ],
})
export class PipesModule { }
