import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule, // Template Forms
    ReactiveFormsModule // Reactive Forms
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})

export class AuthModule { }
