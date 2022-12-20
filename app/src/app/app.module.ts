import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CatalogueRoutingModule } from './catalogue/catalogue-routing.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { PurchaseModule } from './purchase/purchase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogueRoutingModule,
    CoreModule,
    AuthModule,
    CatalogueModule,
    ProfileModule,
    PurchaseModule,
    BlogModule
  ],
  providers: [
    appInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
