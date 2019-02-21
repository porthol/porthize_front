import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            animation: {
                value: 'login'
            }
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            animation: {
                value: 'register'
            }
        }
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        LoginModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
