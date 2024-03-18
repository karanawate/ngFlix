import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies();
  items = ['items0', 'items1', 'items2', 'items3', 'items5'];
}
