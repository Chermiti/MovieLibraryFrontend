import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from 'src/app/Models/movie';
import { DatePipe } from '@angular/common';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  constructor(private router: Router, private movieService: MovieServiceService) { }

  movie: Movie = { id: 1, title: "", director: "", releaseDate: "", type: "" }
  title: string = ""
  director: string = ""
  releaseDate!: any
  movietype: string = ""
  pipe = new DatePipe('en-US');

  ngOnInit(): void {
  }

  OnDateChange(data: any) {

    this.releaseDate = this.pipe.transform(data.value, 'dd/MM/yyyy');
    console.log("date 111", data, this.releaseDate)
  }
  addMovie() {
    this.movie.id = 1
    this.movie.title = this.title
    this.movie.director = this.director
    this.movie.releaseDate = this.releaseDate
    this.movie.type = this.movietype
    console.log("moviee", this.movie, this.releaseDate)
    this.movieService.addMovie(this.movie).subscribe(data => {
      console.log("movie SAVED !!", data)
    })
    this.router.navigate(['movies'])
  }

}
