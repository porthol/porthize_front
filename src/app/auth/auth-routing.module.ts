import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    NbAuthComponent,
    NbLogoutComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent
} from '@nebular/auth';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: NbAuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'logout',
                component: NbLogoutComponent
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent
            },
            {
                path: '',
                redirectTo: 'login'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
