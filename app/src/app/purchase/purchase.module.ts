import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from './bag/bag.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BagComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
