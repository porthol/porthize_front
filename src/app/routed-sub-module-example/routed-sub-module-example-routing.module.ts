import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutedComponentOneComponent } from './routed-component-one/routed-component-one.component';
import { RoutedComponentTwoComponent } from './routed-component-two/routed-component-two.component';
import { RoutedSubModuleExampleModule } from './routed-sub-module-example.module';

const routes: Routes = [
    { path: '', component: RoutedComponentOneComponent }, // Will be 'http(s)://my-dsn/example'
    { path: 'two', component: RoutedComponentTwoComponent }, // Will be 'http(s)://my-dsn/example/two'
    { path: '**', redirectTo: '' } // Will redirect
];

@NgModule({
    imports: [
        RoutedSubModuleExampleModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RoutedSubModuleExampleRoutingModule {
}
