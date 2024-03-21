import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  getUpcomingMovies$ = this.movieservice.getUpcomingMovies();
  constructor(private movieservice: MoviesService) {}
}
