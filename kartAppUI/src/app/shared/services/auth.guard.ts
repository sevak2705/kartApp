import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import {JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    jwtHelper = new JwtHelperService();
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('token');
         if (!this.jwtHelper.isTokenExpired(token)) {
            // authorised so return true
            return true;
         }
         // not logged in so redirect to login page with the return url
         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
