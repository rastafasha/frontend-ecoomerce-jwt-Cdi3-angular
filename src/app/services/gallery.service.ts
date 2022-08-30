import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getGallerys() {
    return this.http.get<Gallery>(this.serverUrl + 'api_gallery/gallerys/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedGallerys() {
    return this.http.get<Gallery>(this.serverUrl + 'api_gallery/featured_gallerys/').pipe(
      catchError(this.handleError)
    );
  }

  getGallery(id: number) {
    return this.http.get<Gallery>(this.serverUrl + 'api_gallery/gallery/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentGallerys() {
    return this.http.get<Gallery>(this.serverUrl + 'api_gallery/recent_gallerys/').pipe(
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
