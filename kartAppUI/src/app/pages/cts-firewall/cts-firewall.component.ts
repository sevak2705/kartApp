import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-firewall',
  templateUrl: './cts-firewall.component.html',
  styleUrls: ['./cts-firewall.component.scss']
})
export class CtsFirewallComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
