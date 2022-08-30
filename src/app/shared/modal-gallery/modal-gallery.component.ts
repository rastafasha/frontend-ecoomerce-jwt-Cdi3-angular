import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MessageService } from 'src/app/services/message.service';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {

  gallery: Gallery;
  galleries: Gallery;
  categories: Category;
  error: string;

  constructor(
    private galleryService: GalleryService,
    public categoryService: CategoryService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.obtenerProducto();
    this.obtenerCategorias();
  }

  obtenerProducto(){
    this.galleryService.getGallerys().subscribe(
      (data: Gallery) => this.galleries = data,
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
