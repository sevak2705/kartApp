import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../shared/services/auth.guard';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'project', loadChildren: './project/project.module#ProjectModule', canActivate: [AuthGuard] },
            //{ path: 'project', loadChildren: './project/project.module#ProjectModule'},

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
