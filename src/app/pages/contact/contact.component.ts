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

  configuraciones: Configuracion;
  configuracion: Configuracion;
  constructor(
    public configuracionService: ConfiguracionService,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.obtenerConfiguracions();
    // this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
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
      }
    )
  }

}
