import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [   ],
})
export class PagesModule { }
