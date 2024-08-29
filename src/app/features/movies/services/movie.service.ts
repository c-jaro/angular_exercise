import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorHandlerService } from '../../../core/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'assets/json/MockMovies.json';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.moviesUrl)
      .pipe(catchError(this.errorHandler.handleError<Movie[]>('getMovies', [])));
  }
  
}
