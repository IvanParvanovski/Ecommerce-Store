import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: [
    './styles/banner.scss',
    '../../shared/product-card-style.scss',
    './catalogue.component.scss'
  ]
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
