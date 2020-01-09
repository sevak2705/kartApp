import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileSaverModule } from 'ngx-filesaver';
import { NgHttpLoaderModule } from 'ng-http-loader';

/* components */

import { FilterProjectPipe } from '../shared/filter-project.pipe';

import {
  MatSliderModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
} from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule ,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    FileUploadModule,
    FileSaverModule,
    MatTooltipModule,
    NgHttpLoaderModule.forRoot()
  ],
  declarations: [
   
    FilterProjectPipe
  ],
  exports: [
    FilterProjectPipe,
    NgbModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    FileUploadModule,
    FileSaverModule,
    MatIconModule,
    MatTooltipModule ,
   NgHttpLoaderModule
  ]
})
export class SharedModule { }
