import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


// modulos
import { OrderModule } from 'ngx-order-pipe';
import {PipesModule} from './pipes/pipes.module'
import {PagesModule} from './pages/pages.module'
import { SharedModule } from './shared/shared.module';
import {ComponentsModule} from './components/components.module';
import {AuthModule} from './auth/auth.module';

import { NotfoundComponent } from './notfound/notfound.component';



// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {HttpClientModule, HttpClient} from '@angular/common/http';



//pluggins
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//editor
import { CKEditorModule } from 'ckeditor4-angular';
import { ImagenPipe } from './pipes/imagen-pipe.pipe';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    EscapeHtmlPipe,
    KeysPipe,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    OrderModule,
    CKEditorModule,
    ComponentsModule,
    // PipesModule,
    PagesModule,
    SharedModule,
    NgbModule,
    NgxPayPalModule,
    AuthModule,
    // TranslateModule.forRoot({
    //   defaultLanguage: 'es',
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (http: HttpClient) => {
    //       return new TranslateHttpLoader(http);
    //     },
    //     deps: [ HttpClient ]
    //   }
    // })

  ],

  exports:[
    EscapeHtmlPipe,
    KeysPipe,
    ImagenPipe
  ],


  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
