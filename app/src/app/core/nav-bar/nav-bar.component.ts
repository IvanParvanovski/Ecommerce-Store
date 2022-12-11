import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { PurchaseService } from 'src/app/purchase/purchase.service';

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

  get purchasesTotalSum() {
    return this.purchaseService.total;
  }

  constructor(
    private authService: AuthService,
    private purchaseService: PurchaseService
  ) { }

  ngOnInit(): void {
  }

}
