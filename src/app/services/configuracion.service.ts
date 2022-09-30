import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import {Configuracion} from '../models/configuracion';
import { map } from 'rxjs/operators';
const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  public configuracion: Configuracion;

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

  getConfiguracions() {
    const url = `${base_url}/congenerals`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, configuracions: Configuracion[]}) => resp.configuracions)
      )
  }

  getConfiguracion(_id: string) {
    const url = `${base_url}/congenerals/${_id}`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, configuracion: Configuracion}) => resp.configuracion)
        );
  }

  getFeaturedConfiguracions() {
    return this.http.get<Configuracion>(this.serverUrl + '/congenerals/').pipe(
      catchError(this.handleError)
    );
  }
getRecentConfiguracions() {
  return this.http.get<Configuracion>(this.serverUrl + '/congenerals/').pipe(
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
