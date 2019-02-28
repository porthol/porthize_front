import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieManagerService } from './cookie-manager.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authURL = 'users';
    tokenObjectKey = 'tokenObject';
    service = 'user.service';

    constructor(
        private httpClient: HttpClient,
        private cookieManagerService: CookieManagerService,
        private router: Router
    ) {}

    login(credentials: Credentials): Observable<any> {
        return this.httpClient.post(`${this.authURL}/login`, credentials).pipe(
            tap(res => {
                this.cookieManagerService.setCookieObject(this.tokenObjectKey, res);
            })
        );
    }

    logout(): Observable<void> {
        this.cookieManagerService.removeCookie(this.tokenObjectKey);
        this.router.navigate(['login']);
        return;
    }

    register(user: User): Observable<any> {
        return this.httpClient.post(`${this.authURL}/register`, user).pipe(
            tap(res => {
                this.cookieManagerService.setCookieObject(this.tokenObjectKey, res);
            })
        );
    }
}
