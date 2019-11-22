import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAppointmentStatusComponent } from './check-appointment-status.component';

describe('CheckAppointmentStatusComponent', () => {
  let component: CheckAppointmentStatusComponent;
  let fixture: ComponentFixture<CheckAppointmentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAppointmentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAppointmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
