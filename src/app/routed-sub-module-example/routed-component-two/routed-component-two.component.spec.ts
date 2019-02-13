import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedComponentTwoComponent } from './routed-component-two.component';

describe('RoutedComponentTwoComponent', () => {
  let component: RoutedComponentTwoComponent;
  let fixture: ComponentFixture<RoutedComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
