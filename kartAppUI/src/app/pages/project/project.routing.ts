import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { AuthGuard } from '../../shared/services/auth.guard';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectDetailTableComponent } from '../project-detail-table/project-detail-table.component';
import { ProjectAddComponent } from '../project-add/project-add.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { UserhomeComponent } from '../userhome/userhome.component';
import { CognizantOnBoardingMainComponent } from '../cognizant-on-boarding-main/cognizant-on-boarding-main.component';
import { CtsHomeComponent } from '../cts-home/cts-home.component';
import { CtsProjectAllocationComponent } from '../cts-project-allocation/cts-project-allocation.component';
import { CtsBootCampComponent } from '../cts-boot-camp/cts-boot-camp.component';
import { CtsAssetsComponent } from '../cts-assets/cts-assets.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProjectComponent
    },
    {
        path: 'detail',
        component: ProjectDetailComponent,
        canActivate: [AuthGuard]
    }
    ,
    {
        path: 'detailTable',
        component: ProjectDetailTableComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'projectAdd',
        component: ProjectAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'onboarding',
        component: OnboardingComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'userhome',
        component: UserhomeComponent
    },
    {
        path: 'cognizant',
        component: CognizantOnBoardingMainComponent,
        children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            {
                path: 'info', component: CtsHomeComponent,
                children: [
                    { path: '', redirectTo: 'allocation', pathMatch: 'full' },
                    { path: 'allocation', component: CtsProjectAllocationComponent },
                    { path: 'bootcamp', component: CtsBootCampComponent },
                    { path: 'assets', component: CtsAssetsComponent },
                    { path: 'firewall', component: CtsAssetsComponent },
                    { path: 'token', component: CtsAssetsComponent },
                    { path: 'gd', component: CtsAssetsComponent },
                    { path: 'citrix', component: CtsAssetsComponent }
                ]
            },
            { path: 'tags', redirectTo: '/pages/project/onboarding', pathMatch: 'full' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
