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

  configuraciones: Configuracion[]=[];
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
  this.user = usuarioService.usuario;
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

  obtenerConfiguracion(_id:string){
    this.configuracionService.getConfiguracion('5f25bd8015655fee54a89691').subscribe(
      resp=>{
        this.configuracion = resp;
        console.log(this.configuracion);
      }
    )
  }

  obtenerUser(_id:string){
    if(_id !== null && _id !== undefined){
    this.usuarioService.get_user(this.user.uid).subscribe(
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
