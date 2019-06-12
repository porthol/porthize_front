import { Component, Input, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMenuItem, NbSidebarComponent } from '@nebular/theme';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    @Input() sidebar: NbSidebarComponent;

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
            icon: 'home-outline',
            link: '/content/dashboard'
        }
    ];

    ngOnInit() {}
}
