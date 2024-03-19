import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MovieDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=415483c86436e6dfc6155f24a0d752fa'
    );
  }
}
