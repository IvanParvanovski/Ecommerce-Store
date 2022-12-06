import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

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
    password: ['', [Validators.required, Validators.minLength(7)]],
    rePassword: ['', [Validators.required]]    
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleRegister() {

  }
}
