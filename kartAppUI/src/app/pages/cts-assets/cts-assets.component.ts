import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-assets',
  templateUrl: './cts-assets.component.html',
  styleUrls: ['./cts-assets.component.scss']
})
export class CtsAssetsComponent implements OnInit {
  pdfSrc = "../../../../assets/images/testPdf.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
