import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [
    './nav-bar.component.scss',
  ]
})
export class NavBarComponent implements OnInit {
  get isLoggedIn() {
    return this.authService.isLogged;
  }

  get user() {
    return this.authService.user;
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
