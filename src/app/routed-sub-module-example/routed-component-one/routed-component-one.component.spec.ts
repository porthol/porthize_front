import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedComponentOneComponent } from './routed-component-one.component';

describe('RoutedComponentOneComponent', () => {
    let component: RoutedComponentOneComponent;
    let fixture: ComponentFixture<RoutedComponentOneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoutedComponentOneComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoutedComponentOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
