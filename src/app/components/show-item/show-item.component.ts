import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { imageBaseUrl } from '../../constants/images-size';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;

  imageBaseUrl = imageBaseUrl;
}
