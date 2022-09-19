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
  configuracion: Configuracion;
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
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));

    this.activatedRoute.params.subscribe( ({id}) => this.obtenerUser(id));
  }

  obtenerConfiguracions(){
    return this.configuracionService.getConfiguracions().subscribe(
      resp=>{
        this.configuraciones = resp;
        console.log(this.configuraciones);
      }
    )
  }

  obtenerConfiguracion(id:number){
    this.configuracionService.getConfiguracion(1).subscribe(
      resp=>{
        this.configuracion = resp;
        console.log(this.configuracion);
      }
    )
  }

  obtenerUser(id:number){
    if(id !== null && id !== undefined){
    this.usuarioService.get_user(this.user.id).subscribe(
      resp=>{
        this.user = resp;
        console.log(this.user);
      }
    )
   }else{
    return 'not user';
   }
  }


}
