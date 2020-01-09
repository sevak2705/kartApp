import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-token',
  templateUrl: './cts-token.component.html',
  styleUrls: ['./cts-token.component.scss']
})
export class CtsTokenComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
