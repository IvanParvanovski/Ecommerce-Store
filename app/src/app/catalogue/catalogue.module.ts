import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';



@NgModule({
  declarations: [
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
  ],
  exports: [
    CatalogueComponent
  ]
})
export class CatalogueModule { }
