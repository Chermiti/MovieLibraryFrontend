import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/Models/movie';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieServiceService) { }
  val!: any
  movie !: Movie
  releaseDate !: Date
  pipe = new DatePipe('en-US');
  date: string = ""
  async ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id']
    })
    const res: any = await this.movieService.getMovieById(this.val).toPromise()
    this.movie = res
    this.date = this.movie.releaseDate || "";
    const str = this.date.split('/');
    const year = Number(str[2]);
    const month = Number(str[1]) - 1;
    const date = Number(str[0]);
    this.releaseDate = new Date(year, month, date)
    console.log("release date", this.releaseDate)
  }

  OnDateChange(data: any) {
    const date = this.pipe.transform(data.value, 'dd/MM/yyyy');
    console.log("movie changed date ", this.movie)
  }
  updateMovie(movie: Movie) {
    this.movieService.updateMovie(this.val, movie).subscribe(data => { console.log("movie UPDATED!!") })
    this.router.navigate(['movies'])
  }
}
