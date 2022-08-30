import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuracion } from './models/configuracion';
import { Usuario } from './models/usuario.model';
import { ConfiguracionService } from './services/configuracion.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configuraciones: Configuracion;
user: Usuario;
 error: {};
constructor(
  public configuracionService: ConfiguracionService,
  public router: Router,
  public http: HttpClient,
  private usuarioService: UsuarioService,
  public activatedRoute: ActivatedRoute,
){
  this.user = usuarioService.user;
}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.obtenerConfiguracion();
    this.obtenerUser();
  }

  obtenerConfiguracion(){
    return this.configuracionService.getConfiguracions().subscribe(
      resp=>{
        this.configuraciones = resp;
        console.log(this.configuraciones);
      }
    )
  }

  obtenerUser(){
    this.usuarioService.get_user(this.user.id).subscribe(
      resp=>{
        this.user = resp;
        console.log(this.user);
      }
    )
  }


}
