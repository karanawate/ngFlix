import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies();

  slideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.slideIndex += 1;
    }, 5000);
  }
}
