import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: IUser | null = null;
  firstName: string | null = null;
  lastName: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.user;

    if (this.user == null) {
      router.navigate(['/']);
    }
    
    const nameData = this.user?.username.split(' ');
    if (nameData != undefined) {
      this.firstName = nameData[0];
      this.lastName = nameData[1];
    }

    console.log(this.user);
    
  }

  ngOnInit(): void {
        
  }

}
