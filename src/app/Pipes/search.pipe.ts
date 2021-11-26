import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Models/movie';

@Pipe({
  name: 'searchMovie'
})
export class SearchPipe implements PipeTransform {

  transform(movies: Movie[], value: string): Movie[] {
    if (!movies || !value) {
      return movies
    }
    return movies.filter(movie => movie.title?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      movie.director?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      movie.releaseDate?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      movie.type?.toLocaleLowerCase().includes(value.toLocaleLowerCase())

    )
  }

}
