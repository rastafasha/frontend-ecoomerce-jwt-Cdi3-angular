import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  public serverUrl: string;
  public media: string;
  public identity;
  public token;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
    this.media = environment.mediaUrl;
  }

  getCursos() {
    return this.http.get<Curso>(this.serverUrl + 'api_curso/cursos/').pipe(
      catchError(this.handleError)
    );
  }

  getCurso(cod_prod: string) {
    return this.http.get<Curso>(this.serverUrl + 'api_curso/curso/' + cod_prod).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedCursos() {
    return this.http.get<Curso>(this.serverUrl + 'api_curso/featured_cursos/').pipe(
      catchError(this.handleError)
    );
  }
getRecentCursos() {
  return this.http.get<Curso>(this.serverUrl + 'api_curso/recent_cursos/').pipe(
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
