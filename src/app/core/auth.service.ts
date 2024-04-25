import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly access_token = "access_token";
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }
     
  login(UserName: string, Password: string) {
    let body = new URLSearchParams();
    body.set("UserName", UserName);
    body.set("Password", Password);
    body.set("grant_type", "password")

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

    return this.http.post('https://localhost:44366/token', body.toString(), options).pipe(
      tap((res:any) => this.doLoginUser(UserName, res.access_token))
    )
  }

  doLoginUser(username:string, token: any) {
    this.loggedUser = username;
    this.storeToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  register(username: string, password: string) {
    let body = new URLSearchParams();
    body.set("UserName", username);
    body.set("Password", password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

    return this.http.post('https://localhost:44366/api/register', body.toString(), options);
  }

  storeToken(token: string) {
    localStorage.setItem(this.access_token, token);
  }

  logout() {
    localStorage.removeItem(this.access_token);
    this.isAuthenticatedSubject.next(false);
  }
}
