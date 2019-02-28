import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private authService: NbAuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.authService.getToken()
            .pipe(mergeMap((token, i) => {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token.toString()) });

                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }

                    request = request.clone({
                        headers: request.headers.set('Accept', 'application/json')
                        // url: environment.securityUrl + environment.baseUrl + request.url
                    });

                    return next.handle(request).pipe(
                        catchError(err => {
                            if (err.status === 401) {
                                // auto logout if 401 response returned from api
                                this.authService.logout('email');
                            }

                            const error = err.error.message || err.statusText;
                            return throwError(error);
                        })
                    );
                })
            );
    }
}
