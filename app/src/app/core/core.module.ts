import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    FooterComponent
  ]
})

export class CoreModule { }
