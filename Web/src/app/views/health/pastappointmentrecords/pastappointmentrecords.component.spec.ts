import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastappointmentrecordsComponent } from './pastappointmentrecords.component';

describe('PastappointmentrecordsComponent', () => {
  let component: PastappointmentrecordsComponent;
  let fixture: ComponentFixture<PastappointmentrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastappointmentrecordsComponent]
    });
    fixture = TestBed.createComponent(PastappointmentrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
