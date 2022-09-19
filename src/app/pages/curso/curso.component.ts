import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Category } from 'src/app/models/category';
import { Configuracion } from 'src/app/models/configuracion';
import { MessageService } from 'src/app/services/message.service';
import { CursoService } from 'src/app/services/curso.service';
import { CategoryService } from 'src/app/services/category.service';
import { ConfiguracionService } from '../../services/configuracion.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso;
  categories: Category;

  constructor(
    public cursoService: CursoService,
    public categoryService: CategoryService,
    public activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    public router: Router,

  ) {
   }

  ngOnInit(): void {

    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({cod_prod}) => this.obtenerCurso(cod_prod));
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


}
