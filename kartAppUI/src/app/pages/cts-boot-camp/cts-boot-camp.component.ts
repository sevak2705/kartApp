import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cts-boot-camp',
  templateUrl: './cts-boot-camp.component.html',
  styleUrls: ['./cts-boot-camp.component.scss']
})
export class CtsBootCampComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
