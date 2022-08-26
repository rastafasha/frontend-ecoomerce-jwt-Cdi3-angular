import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from './models/configuracion';
import { ConfiguracionService } from './services/configuracion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configuraciones: Configuracion;
 error: {};
constructor(
  public configuracionService: ConfiguracionService,
  public router: Router,
  public http: HttpClient
){
}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.obtenerConfiguracion();

  }

  obtenerConfiguracion(){
    return this.configuracionService.getConfiguracions().subscribe(
      resp=>{
        this.configuraciones = resp;
        console.log(this.configuraciones);
      }
    )
  }


}
