import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../models/user';
import { environment } from '../../../../src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  baseUrl = environment.apiUrl + 'Auth/';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post(this.baseUrl + 'login', { username, password }).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }
  register(model: User) {
    return this.http.post(this.baseUrl + 'register', model);
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  
}
