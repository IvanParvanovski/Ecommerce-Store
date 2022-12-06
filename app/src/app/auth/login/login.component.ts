import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../forms.scss',
    './login.component.scss'
  ]
})
export class LoginComponent  {

  constructor() { }

  handleLogin(form: NgForm): void {
    if (form.invalid) { return; }

  
  }

}
