import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie, MoviesDto } from '../../types/movie';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsLists$: Observable<MoviesDto> | null = null;
  searchValue = '';

  constructor(private movieservice: MoviesService) {}

  ngOnInit(): void {
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchkeyWord?: string) {
    this.showsLists$ = this.movieservice.searchMovies(page, searchkeyWord);
  }

  searchChanged() {
    this.getPagedShows(1, this.searchValue);
  }
  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    console.log(pageNumber);
    if (event.page) {
      this.getPagedShows(pageNumber, this.searchValue);
    }
  }
}
