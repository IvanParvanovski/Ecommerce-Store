import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: [
    './styles/banner.scss',
    '../../shared/product-card-style.scss',
    './catalogue.component.scss'
  ]
})
export class CatalogueComponent {
  products: IProduct[] | null = null;

  constructor(
    private catalogueService: CatalogueService
  ) {
    this.products = catalogueService.catalogueProducts;
  }
}
