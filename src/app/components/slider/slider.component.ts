import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { imageBaseUrl } from '../../constants/images-size';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor() {}

  @Input() slides: Movie[] = [];
  // movies$ = this.moviesService.getPopularMovies();

  slideIndex = 0;

  imageBaseUrl = imageBaseUrl;

  ngOnInit() {
    this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }
}
