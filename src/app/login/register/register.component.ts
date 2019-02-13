import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MatInput} from '@angular/material';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  applicationName = environment.title;
  @ViewChild('username') username: MatInput;
  @ViewChild('password') password: MatInput;
  @ViewChild('validPassword') validPassword: MatInput;
  @ViewChild('firstName') firstName: MatInput;
  @ViewChild('lastName') lastName: MatInput;
  @ViewChild('email') email: MatInput;
  hasError = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  register() {
    this.authService.login(
      {
        username: this.username.nativeElement.value,
        password: this.password.nativeElement.value
      }).subscribe(
      () => {
        this.goToLogin();
      },
      () => {
        this.hasError = true;
      });
  }
}
