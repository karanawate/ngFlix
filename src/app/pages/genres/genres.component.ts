import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre, Movie } from '../../types/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null;
  shows$: Observable<Movie[]> | null = null;

  constructor(private mService: MoviesService) {}

  ngOnInit(): void {
    this.genres$ = this.mService.getMovieGenre();
  }

  findByGenre(genreId: number) {
    this.shows$ = this.mService.getMoviesByGenre(genreId);
  }
}
