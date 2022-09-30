import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Category } from 'src/app/models/category';
import { Configuracion } from 'src/app/models/configuracion';
import { MessageService } from 'src/app/services/message.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto;
  categories: Category;
  imagenSerUrl = environment.mediaUrl;

  constructor(
    public productoService: ProductoService,
    public categoryService: CategoryService,
    public activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    public router: Router,
  ) { }

  ngOnInit(): void {

    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerProducto(id));
    this.obtenerCategorias();

  }

  obtenerProducto(_id:string){
    this.productoService.getProducto(_id).subscribe(
      resp=>{
        this.producto = resp;
        console.log(this.producto);
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


}
