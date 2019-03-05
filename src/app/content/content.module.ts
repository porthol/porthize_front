import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NbActionsModule, NbCardModule, NbLayoutModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { ContentRoutingModule } from './content-routing.module';
import { ExampleComponent } from './example/example.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [ContentComponent, SidebarComponent, ExampleComponent, NavbarComponent, ProfileComponent],
    imports: [
        CommonModule,
        NbUserModule,
        RouterModule,
        NbSidebarModule,
        NbLayoutModule,
        NbAuthModule,
        NbActionsModule,
        NbCardModule,
        ContentRoutingModule
    ]
})
export class ContentModule {}
