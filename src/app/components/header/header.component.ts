import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public linktTheme = document.querySelector('#theme');// se comunica el id pulsado
  public links: NodeListOf<Element>; //obtiene clase del div

  categories: Category;
  constructor(
    public categoryService: CategoryService,
    public sidebarService: SidebarService,
    public router: Router,
    public http: HttpClient
  ) { }

  classie:any;

  ngOnInit(): void {
    this.obtenerCategorias();
    //this.links = document.querySelectorAll('.selector');//obtiene clase del div // se dispara despues de inicializado el componente
  }


  openMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.toggle("cbp-spmenu-open");
        // console.log(colorPais)

      }

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
