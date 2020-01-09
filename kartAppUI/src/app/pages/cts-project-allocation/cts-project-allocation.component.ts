import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-cts-project-allocation',
  templateUrl: './cts-project-allocation.component.html',
  styleUrls: ['./cts-project-allocation.component.scss']
})
export class CtsProjectAllocationComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }
  docVisible: boolean = false;
  ngOnInit() {
  }
  showDoc(){
    this.docVisible = true;
  }

}
