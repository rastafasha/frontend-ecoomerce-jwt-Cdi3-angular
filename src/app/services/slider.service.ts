

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { Slider } from '../models/slider';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public datosvictima: string;

  public serverUrl: string;
  public media: string;
  public identity;
  public token;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
  }

  getSliders() {
    return this.http.get<Slider>(this.serverUrl + '/sliders/').pipe(
      catchError(this.handleError)
    );
  }

  getSlider(_id: string) {
    return this.http.get<Slider>(this.serverUrl + '/sliders/' + _id).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedSliders() {
    return this.http.get<Slider>(this.serverUrl + '/sliders/').pipe(
      catchError(this.handleError)
    );
  }
getRecentSliders() {
  return this.http.get<Slider>(this.serverUrl + '/sliders/').pipe(
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
