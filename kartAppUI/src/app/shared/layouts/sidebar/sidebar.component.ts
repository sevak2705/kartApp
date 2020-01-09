import {Component, Input, Output, EventEmitter, OnInit, HostListener, AfterViewInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {


  public menuInfo: Array<any> = [];
  public sidebarToggle = true;

  constructor(
              public _globalService: GlobalService) {
  }

  ngOnInit() {
   
    this._sidebarToggle();
   
  }

  public _sidebarToggle() {
   
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });

  }
  // detect window size and automatically hide the left side menu
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidebarToggle = window.innerWidth >= 970;
    //console.log(window.innerWidth);
  }

  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
    //console.log(window.innerWidth);
  }
}
