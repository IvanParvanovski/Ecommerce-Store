import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase/purchase.service';
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
    private catalogueService: CatalogueService,
    private purchaseService: PurchaseService,
    private router: Router
  ) {
    this.products = catalogueService.catalogueProducts;
  }

  addToBag(item: IProduct) {
    this.purchaseService.addItem(item);
    this.router.navigate(['bag']);
  }
}
