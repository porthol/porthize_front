import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbMenuModule, NbSidebarService, NbThemeModule } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProvider } from '../providers/role.provider';
import { AuthGuard } from '../services/auth-guard.service';
import { NbEvaIconsModule } from '@nebular/eva-icons';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
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
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        { provide: NbRoleProvider, useClass: RoleProvider },
        NbSidebarService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
