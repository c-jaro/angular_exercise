import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-moviedesc',
  templateUrl: './moviedesc.component.html',
  styleUrl: './moviedesc.component.scss'
})
export class MoviedescComponent {
@Input() movie: Movie | null = null;


}
