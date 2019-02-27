import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { RegisterComponent } from './register/register.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        AuthRoutingModule,

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
        })
    ],
    declarations: [RegisterComponent]
})
export class AuthModule {
}
