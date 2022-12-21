import { Component, OnDestroy } from '@angular/core';
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
export class LoginComponent implements OnDestroy {

  user: IUser | null = null;
  errorMsg: object | null = null;

  get hasUser() {
    return this.authService.userExists;
  }

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.authService.userExists = false;
  }

  handleLogin(form: NgForm): void {
    if (form.invalid) { return; }

    this.authService.userExists = false;

    const { email, password } = form.value;

    this.authService.loginUser(email!, password!)
      .subscribe({
        next: (user) => {
          this.authService.user = user;
          this.router.navigate(['/'])
        },
        error: (response) => {
          this.errorMsg = response.error.message;
        }
      });
  }

  

}
