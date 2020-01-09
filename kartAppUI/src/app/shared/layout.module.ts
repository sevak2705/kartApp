import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { GlobalService } from './services/global.service';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ContentTopComponent } from './layouts/content-top/content-top.component';
import { PagesTopComponent } from './layouts/pages-top/pages-top.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { ProjectService } from './services/project.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        GlobalService,
        UserService,
        AuthenticationService,
        ProjectService,
        AuthGuard

    ],
    declarations: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent
    ]
})
export class LayoutModule { }
