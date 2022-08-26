import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { HttpBackend, HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-products-featured',
  templateUrl: './products-featured.component.html',
  styleUrls: ['./products-featured.component.css']
})
export class ProductsFeaturedComponent implements OnInit {

  public productos: Producto;


  error!: string;


  public producto : any = {};

  private http: HttpClient;
  ServerUrl = environment.baseUrl;
  // imagenSerUrl = environment.imageUrl;

  constructor(
    public productoService: ProductoService,
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
    this.productoService.getFeaturedProductos().subscribe(
      resp => {
        this.productos = resp;
        console.log(this.productos);
      }
    )
  }

  gotoPage(){
    return this.router.navigateByUrl('/producto')
  }

  gotoProduct(id:number ) {
    this.productoService.getProducto(id).subscribe(
      res =>{
        this.router.navigateByUrl('/producto/'+id);

      }
    );
  }


}
