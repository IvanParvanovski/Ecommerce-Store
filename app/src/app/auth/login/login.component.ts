import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../forms.scss',
    './login.component.scss'
  ]
})
export class LoginComponent  {

  user: IUser | null = null;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  handleLogin(form: NgForm): void {
    if (form.invalid) { return; }

    const {email, password} = form.value;
    
    this.authService.loginUser(email!, password!)
      .subscribe(user => {
        this.authService.user = user;
        this.router.navigate(['/'])
      });
  }

}
