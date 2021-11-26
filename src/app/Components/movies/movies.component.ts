import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  order: string = 'title';
  movies: Movie[] = []
  sortedMovies: Movie[] = []
  page: number = 1
  search: string = "";
  constructor(private movieService: MovieServiceService, private orderPipe: OrderPipe, private router: Router) {
    this.sortedMovies = orderPipe.transform(this.movies, 'title');
    console.log(this.sortedMovies);
  }

  ngOnInit(): void {

    // get movies

    this.movieService.getAllMovies().subscribe((data: any) => {
      console.log("DATA", data)
      this.movies = data;
      console.log("employees", this.movies)
      //  console.log("image", this.employees[0].profile_image)
    })
  }
  key: number = 1
  reverse: boolean = false
  sort() {
    this.movies = this.orderPipe.transform(this.movies, 'title')
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  deleteMovie(id: number) {
    if (confirm("Are you sure you want to delete the movie ?")) {
      this.movieService.deleteMovie(id).subscribe(data => { })
      window.location.reload();
    }
  }
  addMovie() {
    this.router.navigate(['movies/add-movie'])
  }
  updateMovie(id: number) {
    this.router.navigate(['movies/update-movie/', id])
  }
  searchMovies() {
    // this.movies = this.movies.filter.
  }
}
