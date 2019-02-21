import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatInput } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    applicationName = environment.title;
    @ViewChild('username', { read: MatInput }) username: MatInput;
    @ViewChild('password', { read: MatInput }) password: MatInput;
    hasError = false;
    canRegister = environment.canRegister;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    goToRegister() {
        this.router.navigate(['login/register']);
    }

    login() {
        this.authService.login(
            {
                username: this.username.value,
                password: this.password.value
            }).subscribe(
            () => {
                this.router.navigate(['']);
            },
            () => {
                this.hasError = true;
            });
    }
}

