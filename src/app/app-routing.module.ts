import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
    {
        path: 'content',
        canActivate: [AuthGuard],
        loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
    },
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
