import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbDatepickerModule,
    NbGlobalLogicalPosition,
    NbMenuModule,
    NbSidebarService,
    NbThemeModule,
    NbToastrModule
} from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProvider } from '../providers/role.provider';
import { AuthGuard } from '../services/auth-guard.service';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { CompanyService } from '../services/company.service';
import { UserCurrentService } from '../services/user-current.service';

// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
//
// // the second parameter 'fr' is optional
// registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbDatepickerModule.forRoot(),
        NbThemeModule.forRoot({ name: 'dark' }),
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                    token: {
                        class: NbAuthJWTToken,
                        key: 'token'
                    },
                    baseEndpoint: '/api/users',
                    login: {
                        endpoint: '/login',
                        requireValidToken: false,
                        redirect: {
                            success: '/content',
                            failure: null
                        }
                    },
                    register: {
                        endpoint: ''
                    },
                    requestPass: {
                        endpoint: '/password/reset',
                        method: 'post'
                    },
                    logout: {
                        endpoint: '',
                        redirect: {
                            success: '/'
                        }
                    },
                    resetPass: {
                        endpoint: '/password/reset',
                        method: 'put',
                        redirect: {
                            success: '/'
                        },
                        resetPasswordTokenKey: 'reset-token'
                    }
                })
            ],
            forms: {
                logout: {
                    redirectDelay: 0
                }
            }
        }),
        NbMenuModule.forRoot(),
        NbEvaIconsModule,
        NbSecurityModule.forRoot({
            accessControl: {
                guest: {
                    view: ['login']
                },
                user: {
                    parent: 'guest',
                    view: 'profile'
                },
                root: {
                    parent: 'user',
                    view: '*',
                    create: '*',
                    remove: '*'
                }
            }
        }),
        NbToastrModule.forRoot({
            destroyByClick: true,
            position: NbGlobalLogicalPosition.BOTTOM_END,
            hasIcon: true
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        { provide: NbRoleProvider, useClass: RoleProvider },
        NbSidebarService,
        AuthGuard,
        UserService,
        CompanyService,
        UserCurrentService,
        AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
