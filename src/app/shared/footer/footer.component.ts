import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configuraciones: Configuracion[]=[];
  configuracion: Configuracion;
  categories: Category;

  constructor(
    public configuracionService: ConfiguracionService,
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    // this.obtenerConfiguracions();
    this.obtenerCategorias();
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
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
  obtenerCategorias(){
    return this.categoryService.getCategories().subscribe(
      resp=>{
        this.categories = resp;
        console.log(this.categories);
      }
    )
  }

}
