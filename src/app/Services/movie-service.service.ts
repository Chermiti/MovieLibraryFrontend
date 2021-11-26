import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../Models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  readonly URL = "http://localhost:8080/movies";

  // Get All Movies
  getAllMovies() {
    return this.http.get(this.URL);
  }

  // Add Movie
  addMovie(movie: Movie) {
    return this.http.post(this.URL, movie)
  }

  // Update Movie
  updateMovie(id: number, movie: Movie) {
    return this.http.put(this.URL + "/" + id, movie)
  }

  // Delete Movie
  deleteMovie(id: number) {
    return this.http.delete(this.URL + "/" + id)
  }

  // get movie by id
  getMovieById(id: number) {
    return this.http.get<Movie>(this.URL + "/" + id)
  }
}
