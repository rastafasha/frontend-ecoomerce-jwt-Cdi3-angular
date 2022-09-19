import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { MessageService } from 'src/app/services/message.service';
import { CategoryService } from 'src/app/services/category.service';
import { Page } from 'src/app/models/page';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  page: Page;
  categories: Category;

  constructor(
    public pageService: PageService,
    public categoryService: CategoryService,
    public activatedRoute: ActivatedRoute,
    public router: Router,

  ) {
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerPage(id));
    this.obtenerCategorias();
  }

  obtenerPage(id:number){
    this.pageService.getPage(id).subscribe(
      resp=>{
        this.page = resp;
        console.log(this.page);
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
