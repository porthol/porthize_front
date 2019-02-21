import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutedComponentOneComponent } from './routed-component-one/routed-component-one.component';
import { RoutedComponentTwoComponent } from './routed-component-two/routed-component-two.component';

@NgModule({
    declarations: [RoutedComponentOneComponent, RoutedComponentTwoComponent],
    imports: [
        CommonModule
    ]
})
export class RoutedSubModuleExampleModule {
}
