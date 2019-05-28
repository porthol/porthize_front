import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbSidebarComponent } from '@nebular/theme/components/sidebar/sidebar.component';
import { NbMenuItem } from '@nebular/theme';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    constructor(private authService: NbAuthService) {
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.user = token.getPayload().user;
            }
        });
    }

    user = {};

    menuItems: NbMenuItem[] = [
        {
            title: 'Dashboard',
            icon: 'nb-home',
            link: '/content/dashboard',
            home: true,
        },
        {
            title: 'Profile',
            icon: 'nb-person',
            link: '/content/profile',
        },
    ];

    ngOnInit() {}
}
