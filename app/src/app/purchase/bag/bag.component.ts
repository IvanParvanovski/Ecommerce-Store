import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: [
    './bag.component.scss',
    './styles/details-card.scss',
    './styles/table.scss',
  ]
})
export class BagComponent {
  items: IProduct[];

  get isEmpty() {
    return this.items.length == 0;
  }

  get bagTotal() {
    return this.purchaseService.total;
  }

  get bagTax() {
    return this.purchaseService.tax;
  }

  get bagSubtotal() {
    return this.purchaseService.subtotal;
  }

  constructor(
    private purchaseService: PurchaseService
  ) { 
    this.items = purchaseService.addedProducts;
  }

  increaseQuantity(item: IProduct) {
    if (item.quantity > 100) {
      return;
    }

    item.quantity += 1;
  }

  decreaseQuantity(item: IProduct) {
    if (item.quantity <= 1){
      return;
    }

    item.quantity -= 1;
  }

  
}
