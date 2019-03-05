import { Component, Input, OnInit } from '@angular/core';
import { NbSidebarComponent } from '@nebular/theme/components/sidebar/sidebar.component';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
