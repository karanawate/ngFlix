import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Tvshow, mapToMovies } from '../../types/tvshows';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  popularMovies$ = this.movieservice.getPopularMovies();
  getUpcomingMovies$ = this.movieservice.getUpcomingMovies();
  topRatedMovies$ = this.movieservice.getTopRatedMovies();

  getPopularTvShows$ = this.movieservice
    .getPopularTvShows()
    .pipe(map(mapToMovies));

  constructor(private movieservice: MoviesService) {}
}
