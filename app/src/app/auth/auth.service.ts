import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/register';

  user: IUser | null =  null;

  get isLogged() {
    return this.user !== null;
  }

  constructor(
    private http: HttpClient
  ) { }

  registerUser(firstName: string, lastName: string, email:string, password: string, rePassword: string) {
    return this.http.post<any>(this._registerUrl, {firstName, lastName, email, password, rePassword});
  }

  loginUser(email: string, password: string) {
    return this.http.post<any>(this._loginUrl, {email, password});
  }
}
