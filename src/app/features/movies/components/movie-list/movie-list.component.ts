import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  basemovies: Movie[] = [];
  movies: Movie[] = [];
  hoveredMovie: Movie | null = null;
  movieDescPosition = { top: '0px', left: '0px' };
  minYear = 2000;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.basemovies = movies;
    });
  }

  onYearChange(year: number) {
    this.minYear = year;
    this.movies = this.basemovies.filter((movie) => movie.Year > this.minYear);
  }

  onSelectMovie(movie: Movie) {
    this.router.navigate(['/movies/detail', movie.Title]);
  }

  onHoverMovie(movie: Movie) {
    if (this.hoveredMovie === movie) return;
    this.hoveredMovie = movie;
  }
}
