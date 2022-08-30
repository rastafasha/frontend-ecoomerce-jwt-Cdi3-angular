import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {

  productos: Producto;
  categories: Category;
  error: string;
  product: Producto;

  constructor(
    private productoService: ProductoService,
    public categoryService: CategoryService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.obtenerProducto();
    this.obtenerCategorias();
  }

  obtenerProducto(){
    this.productoService.getProductos().subscribe(
      (data: Producto) => this.productos = data,
      error => this.error = error
    );
  }

  obtenerCategorias(){
    this.categoryService.getCategories().subscribe(
      (data: Category) => this.categories = data,
      error => this.error = error
    );
  }

  addToCart(): void{
    console.log('sending...')
    this.messageService.sendMessage(this.product);
  }

}
