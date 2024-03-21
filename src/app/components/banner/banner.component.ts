import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  upcomingMovies = this.movieservice.UpcomingMovies();
  constructor(private movieservice: MoviesService) {}
}
