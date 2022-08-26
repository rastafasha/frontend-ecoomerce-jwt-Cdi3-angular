import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { Category } from '../models/category';

import { PaisResponsive } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public serverUrl: string;
  public media: string;
  public identity;
  public token;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
    this.media = environment.mediaUrl;
  }

  getCategories() {
    return this.http.get<Category>(this.serverUrl + 'api_category/categorys/').pipe(
      catchError(this.handleError)
    );
  }

  getCategory(id: number) {
    return this.http.get<Category>(this.serverUrl + 'api_category/category/' + id).pipe(
      catchError(this.handleError)
    );
  }

  // getDatosvictimabyPais(code): Observable<any>{
  //   const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.get( this.serverUrl + 'api_datosvictima/datosvictima/' + code, {headers});

  // }


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
