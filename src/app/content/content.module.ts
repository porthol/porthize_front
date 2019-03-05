import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NbActionsModule, NbLayoutModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { ContentRoutingModule } from './content-routing.module';
import { ExampleComponent } from './example/example.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [ContentComponent, SidebarComponent, ExampleComponent, NavbarComponent],
    imports: [
        CommonModule,
        NbUserModule,
        RouterModule,
        NbSidebarModule,
        NbLayoutModule,
        NbAuthModule,
        NbActionsModule,
        ContentRoutingModule
    ]
})
export class ContentModule {}
