import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configuraciones: Configuracion;
  configuracion: Configuracion;

  constructor(
    public configuracionService: ConfiguracionService,
  ) { }

  ngOnInit(): void {
    this.obtenerConfiguracions();
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
