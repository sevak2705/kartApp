import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { AlertifyService } from '../../shared/services/alertify.service';
import { SpinnerVisibilityService } from 'ng-http-loader';

import {Project} from '../../shared/models/project';
import { ProjectService } from '../../shared/services/project.service';





@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  dataArray: Project[];
  searchString: string;
  sidebarToggle = true;
  selectedProject: Project;

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  baseUrl = environment.apiUrl + 'Project/';
  url: string;
  @ViewChild('pRef') pRef: ElementRef;

  constructor(
    private projectService: ProjectService,
    private alertify: AlertifyService,
    private _FileSaverService: FileSaverService, private spinner: SpinnerVisibilityService ) {
    this.uploader = new FileUploader({
      authToken: 'Bearer ' + localStorage.getItem('token'),
      autoUpload: false,
      queueLimit: 1
    });
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.uploader.onSuccessItem = (item, response, status, headers) =>
      this.onSuccessItem(response);
  }
  onSuccessItem(response: string  ): any {
    this.alertify.success('File uploaded successfully');
    // this.pRef.nativeElement.className = '';
    this.uploader.queue.length = 0;
  }
  FileSelected() {
    this.uploader.onBeforeUploadItem = item => {
      item.withCredentials = false;
      item.url = this.baseUrl + 'upload/' + this.selectedProject.id;
    };
  }
  download() {
     //let filePath = this.selectedProject.fileURL;
    // let fileName = filePath.replace(/^.*[\\\/]/, '');
    // let fileType =  fileName.split('.').pop();
    // console.log(filePath);
  this.projectService.downloadFile(this.selectedProject.id).subscribe(
   res => {
    let contentDisposition = res.headers.get('content-disposition');
    let filename = contentDisposition.split(';')[1].split('filename')[1].split('=')[1].trim();
    console.log(filename);
    this._FileSaverService.save(res.body, filename);
   },
   () => {
     this.alertify.error('File download unsuccessful. Try again!');
   },
   () => {
     return this.alertify.success('File download successfully');
   });  
  }
  ngOnInit() {
    this.getProjectList();
  }
  getProjectList() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.spinner.show();
        this.dataArray = data;
      },
      error => {
        this.alertify.error('search data not loaded');
      },
      () =>  this.spinner.hide()
    );
  }

  getDescription(val: String) {
    console.log(val);
    this.selectedProject = this.dataArray.find(a => a.applicationName === val);
    console.log(this.selectedProject.fileURL);
    console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = ''; //reset file selected in file loader
    console.log(this.myInputVariable.nativeElement.files);
    this.uploader.queue.length = 0; //reset file selected in table
  }
  _sidebarToggle() {
    this.sidebarToggle = !this.sidebarToggle;
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  
}

