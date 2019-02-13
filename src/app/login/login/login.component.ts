import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {environment} from '../../../environments/environment';
import {MatInput} from '@angular/material';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  applicationName = environment.title;
  @ViewChild('username') username: MatInput;
  @ViewChild('password') password: MatInput;
  hasError = false;
  canRegister = environment.canRegister;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['login/register']);
  }

  login() {
    this.authService.login(
      {
        username: this.username.nativeElement.value,
        password: this.password.nativeElement.value
      }).subscribe(
      () => {
        this.router.navigate(['']);
      },
      () => {
        this.hasError = true;
      });
  }
}

