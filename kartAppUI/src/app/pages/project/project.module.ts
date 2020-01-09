import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './project.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from './project.component';
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
import { CtsFirewallComponent } from '../cts-firewall/cts-firewall.component';
import { CtsTokenComponent } from '../cts-token/cts-token.component';
import { CtsGDComponent } from '../cts-gd/cts-gd.component';
import { CtsCitrixComponent } from '../cts-citrix/cts-citrix.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing,
        PdfViewerModule
    ],
    declarations: [
        ProjectComponent,
        ProjectDetailComponent,
        ProjectDetailTableComponent,
        ProjectAddComponent,
        OnboardingComponent,
        UserhomeComponent,
        CognizantOnBoardingMainComponent,
        CtsHomeComponent,
        CtsProjectAllocationComponent,
        CtsBootCampComponent,
        CtsAssetsComponent,
        CtsFirewallComponent,
        CtsTokenComponent,
        CtsGDComponent,
        CtsCitrixComponent

    ]
})
export class ProjectModule { }
