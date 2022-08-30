import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { Configuracion } from 'src/app/models/configuracion';
import { ConfiguracionService } from 'src/app/services/configuracion.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto;
  categories: Category;

  configuraciones: Configuracion;
  configuracion: Configuracion;

  constructor(
    public productoService: ProductoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
    private messageService: MessageService,
    public configuracionService: ConfiguracionService,
  ) { }

  ngOnInit(): void {

    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({cod_prod}) => this.obtenerProducto(cod_prod));
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
    this.obtenerCategorias();
    window.scrollTo(0,0);
  }

  obtenerProducto(cod_prod:string){
    this.productoService.getProducto(cod_prod).subscribe(
      resp=>{
        this.producto = resp;
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
    console.log('sending...')
    this.messageService.sendMessage(this.producto);
  }

  obtenerConfiguracion(id:number){
    this.configuracionService.getConfiguracion(1).subscribe(
      resp=>{
        this.configuracion = resp;
      }
    )
  }

}
