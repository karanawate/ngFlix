import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private apikey = '415483c86436e6dfc6155f24a0d752fa';
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http
      .get<MovieDto>(
        `${this.apiUrl}/movie/popular?api_key=${this.apikey}`
        // 'https://api.themoviedb.org/3/movie/popular?api_key=415483c86436e6dfc6155f24a0d752fa'
      )
      .pipe(map((data) => data.results));
  }

  getUpcomingMovies() {
    return this.http
      .get<MovieDto>(
        `${this.apiUrl}/movie/upcoming?api_key=${this.apikey}`
        // https://api.themoviedb.org/3/movie/upcoming?api_key=415483c86436e6dfc6155f24a0d752fa
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getTopRatedMovies() {
    return this.http
      .get<MovieDto>(
        `${this.apiUrl}/movie/top_rated?api_key=${this.apikey}`
        //https://api.themoviedb.org/3/tv/top_rated?api_key=415483c86436e6dfc6155f24a0d752fa
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getPopularTvShows() {
    return this.http
      .get<MovieDto>(`${this.apiUrl}/tv/popular?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }
}
