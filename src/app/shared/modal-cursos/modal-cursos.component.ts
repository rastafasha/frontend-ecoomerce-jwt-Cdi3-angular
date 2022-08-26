import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { CategoryService } from 'src/app/services/category.service';
import { Curso } from 'src/app/models/curso';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-modal-cursos',
  templateUrl: './modal-cursos.component.html',
  styleUrls: ['./modal-cursos.component.css']
})
export class ModalCursosComponent implements OnInit {

  cursos: Curso;
  categories: Category;
  error: string;

  constructor(
    private cursoService: CursoService,
    public categoryService: CategoryService,
    ) { }

  ngOnInit() {
    this.obtenerProducto();
    this.obtenerCategorias();
  }

  obtenerProducto(){
    this.cursoService.getCursos().subscribe(
      (data: Curso) => this.cursos = data,
      error => this.error = error
    );
  }

  obtenerCategorias(){
    this.categoryService.getCategories().subscribe(
      (data: Category) => this.categories = data,
      error => this.error = error
    );
  }

}
