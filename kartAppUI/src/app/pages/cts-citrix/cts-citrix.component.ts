import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-citrix',
  templateUrl: './cts-citrix.component.html',
  styleUrls: ['./cts-citrix.component.scss']
})
export class CtsCitrixComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
