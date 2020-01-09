import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../../services/alertify.service';

import {GlobalService} from '../../services/global.service';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements AfterViewInit, OnInit {
  avatarImgSrc = 'assets/images/avatar.jpg';
  userName = 'Bknds';
  userPost = 'FrontEnd';
  currentUser: any;


  sidebarToggle = true;
  tip = {ring: true, email: true};

  constructor(private _globalService: GlobalService, private authenticationService: AuthenticationService,
    private jwtToken: JwtHelperService, private alertify: AlertifyService) {
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authenticationService.decodedToken = this.jwtToken.decodeToken(token);
      this.currentUser = this.authenticationService.decodedToken.unique_name;
    }

  }

  public _sidebarToggle() {
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
  }
  loggedIn() {
    return this.authenticationService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
     this.alertify.message('logged out');
  }

  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
  }
}
