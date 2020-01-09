import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/project';
import { ProjectService } from '../../shared/services/project.service';
import { AlertifyService } from '../../shared/services/alertify.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
  providers: [ProjectService]
})
export class ProjectAddComponent implements OnInit {
  projectData: Project = new Project();
  constructor(private projectService: ProjectService, private alertify: AlertifyService) {}

  ngOnInit() {}

  submitProject(val: Project) {
    console.log(val);
    this.projectService.addProject(val).subscribe(
      data => {},
      error => {
        this.alertify.error('Error in saving data');
      },
      () => this.alertify.success('Data Saved Successfuly')
    );
  }
}
