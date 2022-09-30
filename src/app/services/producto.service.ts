import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { map } from 'rxjs/operators';

const base_url = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  public serverUrl: string;
  public media: string;
  public identity;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
  }

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

  getProductos() {
    const url = `${base_url}/productos`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, productos: Producto[]}) => resp.productos)
      )
  }

  getProducto(_id: string) {
    const url = `${base_url}/productos/${_id}`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, producto: Producto}) => resp.producto)
        );
  }

  getFeaturedProductos() {
    return this.http.get<Producto>(this.serverUrl + '/productos/').pipe(
      catchError(this.handleError)
    );
  }
getRecentProductos() {
  return this.http.get<Producto>(this.serverUrl + '/productos/').pipe(
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
