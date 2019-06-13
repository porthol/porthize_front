import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbSidebarService } from '@nebular/theme';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(private authService: NbAuthService, private sidebarService: NbSidebarService) {
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.user = token.getPayload().user;
            }
        });
    }

    user = {};
    items = [
        {
            title: 'Profile',
            icon: 'person-outline',
            link: '/content/profile'
        },
        {
            title: 'Log out',
            icon: 'log-out-outline',
            link: '/logout'
        }
    ];

    // to be managaed on back
    notifications = [
        {
            title: 'Im the notif 1',
            link: '/content/notifications/1'
        },
        {
            title: 'Im the notif 2',
            link: '/content/notifications/2'
        }
    ];

    ngOnInit() {
    }

    toggle() {
        this.sidebarService.toggle(true);
    }
}
