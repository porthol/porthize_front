import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbSidebarComponent } from '@nebular/theme/components/sidebar/sidebar.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    @Input() sideBar: NbSidebarComponent;

    constructor(private authService: NbAuthService) {
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.user = token.getPayload().user;
            }
        });
    }

    user = {};

    ngOnInit() {}

    toggle() {
        this.sideBar.toggle(true);
    }
}
