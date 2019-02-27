import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CookieManagerService } from './cookie-manager.service';
import { TokenObject } from '../models/token';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService, private cookieManager: CookieManagerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // intercept request to apply the right api route
        const t: TokenObject = this.cookieManager.getCookieObject(this.authService.tokenObjectKey);

        if (t && t.token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + t.token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone(
            {
                headers: request.headers.set('Accept', 'application/json')
                // url: environment.securityUrl + environment.baseUrl + request.url
            });

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
