import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { matchingPasswords } from './passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../forms.scss',
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(7)]],
      rePassword: ['']
    }, { validators: [matchingPasswords('password', 'rePassword')] })
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleRegister() {
    if (this.registerForm.invalid) { return; }

    const username = `${this.registerForm.value.firstName} ${this.registerForm.value.lastName}`;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.pass?.password;
    const rePassword = this.registerForm.value.pass?.rePassword;

    this.authService.registerUser(
      username!,
      email!,
      password!,
      rePassword!).subscribe({
        next: (user) => {
          this.authService.user = user;
          this.router.navigate(['/']);
        },
        error: (response) => {
          if (response.status == 409) {
            this.authService.userExists = true;
            this.router.navigate(['/login']);
          }
        }
      });
  }
}
