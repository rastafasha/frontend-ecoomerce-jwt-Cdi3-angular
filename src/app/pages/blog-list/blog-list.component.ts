import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog;
  error: {};

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.blogService.getBlogs().subscribe(
      (data: Blog) => this.blogs = data,
      error => this.error = error
    );
  }


}
