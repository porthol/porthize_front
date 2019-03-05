import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { ExampleComponent } from './example/example.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: 'example',
                component: ExampleComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'example'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}
