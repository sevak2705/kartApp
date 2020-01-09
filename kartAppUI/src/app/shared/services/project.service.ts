import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.apiUrl + 'project/';
  constructor(private http: HttpClient) {}

  addProject(model: Project) {
    return this.http.post(this.baseUrl + 'add', model);
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }
  downloadFile(id: any): Observable<any> {
    let url =  this.baseUrl + `download/${id}`;
    console.log(url);
    return this.http.get(url, {
    observe: 'response',
    responseType: 'blob'
  });
  }
}
