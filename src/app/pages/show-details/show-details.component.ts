import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss',
})
export class ShowDetailsComponent implements OnInit {
  showId = 0;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    });
  }
}
