import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightLinkDirectiveDirective } from '../core/nav-bar/highlight-link-directive.directive';



@NgModule({
  declarations: [
    HighlightLinkDirectiveDirective
  ],
  imports: [
    CommonModule,
  ],
})

export class SharedModule { }
