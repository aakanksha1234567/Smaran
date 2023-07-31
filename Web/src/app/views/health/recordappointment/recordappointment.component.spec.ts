import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordappointmentComponent } from './recordappointment.component';

describe('RecordappointmentComponent', () => {
  let component: RecordappointmentComponent;
  let fixture: ComponentFixture<RecordappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordappointmentComponent]
    });
    fixture = TestBed.createComponent(RecordappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
