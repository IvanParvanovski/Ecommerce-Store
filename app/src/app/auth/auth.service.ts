import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null =  null;

  get isLogged() {
    return this.user !== null;
  }

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, email:string, password: string, rePassword: string) {
    const tel = '';
    return this.http.post<any>('/api/register', { username, email, password, rePassword, tel});
  }

  loginUser(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password });
  }

  logout() {
    return this.http.post<void>('/api/logout', {});
  }

  getProfile() {
    return this.http.get<IUser>('/api/users/profile');
  }
}
