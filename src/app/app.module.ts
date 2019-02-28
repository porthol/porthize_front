import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { CookieManagerService } from '../services/cookie-manager.service';
import { CookieModule } from 'ngx-cookie';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarService, NbThemeModule } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CookieModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                    token: {
                        class: NbAuthJWTToken,
                        key: 'token'
                    },
                    baseEndpoint: '',
                    login: {
                        endpoint: '/api/users/login',
                        requireValidToken: false,
                        redirect: {
                            success: '/content',
                            failure: null
                        }
                    },
                    register: {
                        endpoint: '/api/users'
                    },
                    requestPass: {
                        endpoint: '/api/users/password/reset',
                        method: 'post'
                    },
                    logout: {
                        redirect: {
                            success: '/'
                        }
                    },
                    resetPass: {
                        endpoint: '/api/users/password/reset',
                        method: 'put',
                        redirect: {
                            success: '/'
                        },
                        resetPasswordTokenKey: 'reset-token'
                    }
                })
            ],
            forms: {}
        })
    ],
    providers: [
        CookieManagerService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        NbSidebarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
