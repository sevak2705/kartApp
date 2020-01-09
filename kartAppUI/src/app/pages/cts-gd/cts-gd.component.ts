import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-gd',
  templateUrl: './cts-gd.component.html',
  styleUrls: ['./cts-gd.component.scss']
})
export class CtsGDComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
