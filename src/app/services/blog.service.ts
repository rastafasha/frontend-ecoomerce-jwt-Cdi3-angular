import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';
const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return{
      headers: {
        'x-token': this.token
      }
    }
  }

  getBlogs() {
    const url = `${base_url}/blogs`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, blogs: Blog[]}) => resp.blogs)
      )
  }

  getFeaturedBlogs() {
    return this.http.get<Blog>(this.serverUrl + '/blogs/').pipe(
      catchError(this.handleError)
    );
  }

  getBlog(_id: string) {
    const url = `${base_url}/blogs/${_id}`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, blog: Blog}) => resp.blog)
        );
  }

  getRecentBlogs() {
    return this.http.get<Blog>(this.serverUrl + '/blogs/').pipe(
      catchError(this.handleError)
    );
  }

  getCategories() {
    return this.http.get<Category>(this.serverUrl + 'api/categories/').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
