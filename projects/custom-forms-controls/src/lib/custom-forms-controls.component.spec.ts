import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormsControlsComponent } from './custom-forms-controls.component';

describe('CustomFormsControlsComponent', () => {
  let component: CustomFormsControlsComponent;
  let fixture: ComponentFixture<CustomFormsControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFormsControlsComponent]
    });
    fixture = TestBed.createComponent(CustomFormsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
