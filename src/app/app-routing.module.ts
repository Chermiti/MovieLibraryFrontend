import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddMovieComponent } from './Components/movies/add-movie/add-movie.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { UpdateMovieComponent } from './Components/movies/update-movie/update-movie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/add-movie', component: AddMovieComponent },
  { path: 'movies/update-movie/:id', component: UpdateMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
