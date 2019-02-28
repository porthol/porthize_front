import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { CookieManagerService } from '../services/cookie-manager.service';
import { CookieModule } from 'ngx-cookie';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule, NbUserModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbUser } from '@nebular/auth/models/user';

@NgModule({
    declarations: [AppComponent, SidebarComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CookieModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NbThemeModule.forRoot({ name: 'default' }),
        RouterModule,
        NbSidebarModule,
        NbLayoutModule,
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
                        endpoint: '/api/users/login'
                    },
                    register: {
                        endpoint: '/api/users'
                    }
                })
            ],
            forms: {}
        }),
        NbUserModule
    ],
    providers: [
        CookieManagerService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        NbSidebarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
