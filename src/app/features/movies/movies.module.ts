import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { MoviedescComponent } from '../movies/components/moviedesc/moviedesc.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieDetailComponent,
    MoviedescComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MoviesModule {}
