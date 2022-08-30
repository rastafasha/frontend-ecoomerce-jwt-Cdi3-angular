import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { Configuracion } from 'src/app/models/configuracion';
import { ConfiguracionService } from '../../services/configuracion.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso;
  categories: Category;
  configuraciones: Configuracion;
  configuracion: Configuracion;

  constructor(
    public cursoService: CursoService,
    public categoryService: CategoryService,
    private messageService: MessageService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public configuracionService: ConfiguracionService,

  ) {
   }

  ngOnInit(): void {

    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({cod_prod}) => this.obtenerCurso(cod_prod));
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
    this.obtenerCategorias();
  }

  obtenerCurso(cod_prod:string){
    this.cursoService.getCurso(cod_prod).subscribe(
      resp=>{
        this.curso = resp;
        console.log(this.curso);
      }
    )
  }

  obtenerCategorias(){
    return this.categoryService.getCategories().subscribe(
      resp=>{
        this.categories = resp;
        console.log(this.categories);
      }
    )
  }

  addToCart(): void{
    console.log('sending curso...')
    this.messageService.sendMessageCurso(this.curso);
  }

  obtenerConfiguracion(id:number){
    this.configuracionService.getConfiguracion(1).subscribe(
      resp=>{
        this.configuracion = resp;
      }
    )
  }

}
