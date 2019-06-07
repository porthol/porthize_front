import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbContextMenuModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbUserModule
} from '@nebular/theme';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { ContentRoutingModule } from './content-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ContentComponent, SidebarComponent, NavbarComponent, ProfileComponent, DashboardComponent],
    imports: [
        CommonModule,
        NbUserModule,
        RouterModule,
        NbSidebarModule,
        NbLayoutModule,
        NbAuthModule,
        NbActionsModule,
        NbCardModule,
        NbMenuModule,
        NbIconModule,
        NbCheckboxModule,
        NbInputModule,
        ContentRoutingModule,
        NbContextMenuModule,
        ReactiveFormsModule,
        NbDatepickerModule,
        NbButtonModule
    ]
})
export class ContentModule {}
