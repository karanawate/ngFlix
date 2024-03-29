import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvshowsDto } from '../types/tvshows';
import { Movie, MoviesDto } from '../types/movie';
import { VideoDto } from '../types/video';
import { ImageDto } from '../types/image';
import { CreditDTO } from '../types/credit';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private apikey = '415483c86436e6dfc6155f24a0d752fa';
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/popular?api_key=${this.apikey}`
        // 'https://api.themoviedb.org/3/movie/popular?api_key=415483c86436e6dfc6155f24a0d752fa'
      )
      .pipe(map((data) => data.results));
  }

  getUpcomingMovies() {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/upcoming?api_key=${this.apikey}`
        // https://api.themoviedb.org/3/movie/upcoming?api_key=415483c86436e6dfc6155f24a0d752fa
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getTopRatedMovies() {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/top_rated?api_key=${this.apikey}`
        //https://api.themoviedb.org/3/tv/top_rated?api_key=415483c86436e6dfc6155f24a0d752fa
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getPopularTvShows() {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/popular?api_key=${this.apikey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apikey}`
    );
  }

  getMovieVideo(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apikey}`)
      .pipe(map((data) => data.results));
  }

  getMovieImage(id: string) {
    return this.http
      .get<ImageDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apikey}`)
      .pipe(map((data) => data.backdrops));
  }

  getMovieCredit(id: string) {
    return this.http
      .get<CreditDTO>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apikey}`
      )
      .pipe(map((data) => data.cast));
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apikey}`
      )
      .pipe(map((data) => data.results));
  }
}
