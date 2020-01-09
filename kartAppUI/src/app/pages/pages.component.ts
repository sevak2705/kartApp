import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent { 
  public spinkit = Spinkit;
}
