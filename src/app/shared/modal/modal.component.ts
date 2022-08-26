import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  productos: Producto;
  categories: Category;
  error: string;

  constructor(
    private productoService: ProductoService,
    public categoryService: CategoryService,
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

}
