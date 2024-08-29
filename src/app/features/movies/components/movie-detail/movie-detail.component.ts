import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
	movie: Movie | undefined;
	constructor(
		private route: ActivatedRoute,
		private router: Router, // Inject Router
		private movieService: MovieService
	  ) {}
  
	ngOnInit(): void {
	  this.route.paramMap.subscribe(params => {
		const title = params.get('title');
		if (title) {
		  this.loadMovie(title);
		}
	  });
	}
  
	loadMovie(title: string): void {
	  this.movieService.getMovies().subscribe((movies) => {
		this.movie = movies.find((movie) => movie.Title === title);
	  });
	}

	goBack(): void {
		this.router.navigate(['/movies']); // Navigate back to the movie list
	  }
}
