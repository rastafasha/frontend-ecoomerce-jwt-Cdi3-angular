import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Configuracion } from 'src/app/models/configuracion';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  configuraciones: Configuracion[]=[];
  configuracion: Configuracion;
  constructor(
    public configuracionService: ConfiguracionService,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  window.scrollTo(0,0);
    this.obtenerConfiguracions();
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
  }

   obtenerConfiguracions(){
    this.configuracionService.getConfiguracions().subscribe(
      configuraciones => {
        this.configuraciones = configuraciones;
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

}
