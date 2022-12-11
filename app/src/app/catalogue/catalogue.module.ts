import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CatalogueRoutingModule,
  ],
  exports: [
    CatalogueComponent
  ]
})
export class CatalogueModule { }
