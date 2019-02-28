import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent
} from '@nebular/auth';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: NbAuthComponent,
        children: [
            {
                path: 'login',
                component: NbLoginComponent
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
