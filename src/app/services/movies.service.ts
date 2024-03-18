import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=415483c86436e6dfc6155f24a0d752fa'
    );
  }
}
