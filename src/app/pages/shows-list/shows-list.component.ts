import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsLists$: Observable<Movie[]> | null = null;
  searchValue = '';

  constructor(private movieservice: MoviesService) {}

  ngOnInit(): void {
    this.showsLists$ = this.movieservice.searchMovies(1, this.searchValue);
  }

  searchChanged() {
    console.log(this.searchValue);
  }
}
