import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  movies: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=415483c86436e6dfc6155f24a0d752fa'
      )
      .subscribe((data) => {
        this.movies = data;
      });
  }
}
