import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatInput } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    applicationName = environment.title;
    @ViewChild('username', { read: MatInput }) username: MatInput;
    @ViewChild('password', { read: MatInput }) password: MatInput;
    @ViewChild('validPassword', { read: MatInput }) validPassword: MatInput;
    @ViewChild('firstName', { read: MatInput }) firstName: MatInput;
    @ViewChild('lastName', { read: MatInput }) lastName: MatInput;
    @ViewChild('email', { read: MatInput }) email: MatInput;
    hasError = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    goToLogin() {
        this.router.navigate(['login']);
    }

    register() {
        this.authService.register(
            {
                username: this.username.value,
                password: this.password.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.lastName.value
            }).subscribe(
            () => {
                this.goToLogin();
            },
            () => {
                this.hasError = true;
            });
    }
}
