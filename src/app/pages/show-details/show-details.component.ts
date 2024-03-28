import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { IMAGE_SIZES } from '../../constants/images-size';
import { Video } from '../../types/video';
import { Image } from '../../types/image';
import { Actor } from '../../types/credit';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss',
})
export class ShowDetailsComponent implements OnInit {
  showId = '';
  imageSizes = IMAGE_SIZES;

  show$: Observable<Movie> | null = null;
  showVideo$: Observable<Video[]> | null = null;
  showImage$: Observable<Image[]> | null = null;
  actor$: Observable<Actor[]> | null = null;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.showId = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.showId);
    this.showVideo$ = this.moviesService.getMovieVideo(this.showId);
    this.showImage$ = this.moviesService.getMovieImage(this.showId);
    this.actor$ = this.moviesService.getMovieCredit(this.showId);
  }
}
