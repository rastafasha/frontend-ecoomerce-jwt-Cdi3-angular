import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public datosvictima: string;

  public serverUrl: string;
  public media: string;
  public identity;
  public token;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
    this.media = environment.mediaUrl;
  }

  getPages() {
    return this.http.get<Page>(this.serverUrl + 'api_page/pages/').pipe(
      catchError(this.handleError)
    );
  }

  getPage(id: number) {
    return this.http.get<Page>(this.serverUrl + 'api_page/page/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedPages() {
    return this.http.get<Page>(this.serverUrl + 'api_page/pages/').pipe(
    catchError(this.handleError)
    );
  }

  getRecentPages() {
    return this.http.get<Page>(this.serverUrl + 'api_page/recent_pages/').pipe(
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
