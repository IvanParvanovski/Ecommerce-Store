import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    BlogComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule
  ]
})

export class BlogModule { }
