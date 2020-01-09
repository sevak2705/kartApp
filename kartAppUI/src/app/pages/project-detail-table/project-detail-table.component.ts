import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
//import {projectData,Project} from '../project-detail/projectData';
import {Project} from '../../shared/models/project';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-project-detail-table',
  templateUrl: './project-detail-table.component.html',
  styleUrls: ['./project-detail-table.component.scss']
})
export class ProjectDetailTableComponent implements OnInit {
 
  displayedColumns = ['Index', 'applicationName', 'services', 'technology'];
  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private projectService: ProjectService) {  
  }
  ngOnInit(): void {
    this.getProjectList();
  }
  getProjectList() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
              this.dataSource = new MatTableDataSource(data);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      },
      () => console.log('done')
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
