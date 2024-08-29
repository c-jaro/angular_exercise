import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: '', component: MovieListComponent }, // /movies
      { path: 'detail/:title', component: MovieDetailComponent }, //
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
