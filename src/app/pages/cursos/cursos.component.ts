import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { HttpBackend, HttpClient } from '@angular/common/http';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: Curso;


  error!: string;

  configuracion: Configuracion;

  private http: HttpClient;
  ServerUrl = environment.baseUrl;
  // imagenSerUrl = environment.imageUrl;

  constructor(
    public cursoService: CursoService,
    public configuracionService: ConfiguracionService,
    private router: Router,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);

   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.loadProducts();



  }
  loadProducts(){
    this.cursoService.getCursos().subscribe(
      resp => {
        this.cursos = resp;
        console.log(this.cursos);
      }
    )
  }


}
