import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightLinkDirectiveDirective } from '../core/nav-bar/highlight-link-directive.directive';
import { PriceFormatPipe } from './price-format.pipe';



@NgModule({
  declarations: [
    HighlightLinkDirectiveDirective,
    PriceFormatPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PriceFormatPipe
  ]
})

export class SharedModule { }
