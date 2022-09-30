import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { Configuracion } from 'src/app/models/configuracion';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  imagenSerUrl = environment.mediaUrl;

  blog: Blog;
  blogrecientes: Blog;
  categories: Category;

  configuraciones: Configuracion;
  configuracion: Configuracion;


  constructor(
    public blogService: BlogService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
    private messageService: MessageService,
    public configuracionService: ConfiguracionService,
  ) { }

  ngOnInit(): void {

    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerBlog(id));
    this.obtenerCategorias();
    this.obtenerBlogRecent();
    window.scrollTo(0,0);
  }

  obtenerBlog(_id:string){
    this.blogService.getBlog(_id).subscribe(
      resp=>{
        this.blog = resp;
        console.log(this.blog);
      }
    )
  }

  obtenerBlogRecent(){
    this.blogService.getRecentBlogs().subscribe(
      resp=>{
        this.blogrecientes = resp;
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
