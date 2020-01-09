import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from '../../../../src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = environment.apiUrl + 'Auth/';
    constructor(private http: HttpClient) { 
        
    }

    register(model: User) {
        return this.http.post(this.baseUrl + 'register', model);
      }
}
