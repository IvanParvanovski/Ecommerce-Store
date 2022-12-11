import { Injectable } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  items: IProduct[];

  get addedProducts() {
    return this.items;
  }

  get tax() {
    return 14.52;
  }

  get total() {
    if (this.items.length == 0) {
      return 0;
    }

    return this.subtotal + this.tax;
  }

  get subtotal() {
    return this.items.reduce(
      (previousVal, currentValue) => previousVal + currentValue.price * currentValue.quantity, 0
    )
  }
  
  constructor() { 
    this.items = [];
  }

  addItem(product: IProduct) {
    product.quantity = 1;
    this.items.push(product);
  }

  // removeItem(product: IProduct) {
  //   this.items.s
  // }
}
