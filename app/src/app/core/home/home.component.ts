import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './styles/new-clothes.scss',
    './styles/news.scss',
    './styles/carousel.scss',
    './styles/logos-container.scss',
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
