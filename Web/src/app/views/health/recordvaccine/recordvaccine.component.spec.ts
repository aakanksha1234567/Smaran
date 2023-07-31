import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordvaccineComponent } from './recordvaccine.component';

describe('RecordvaccineComponent', () => {
  let component: RecordvaccineComponent;
  let fixture: ComponentFixture<RecordvaccineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordvaccineComponent]
    });
    fixture = TestBed.createComponent(RecordvaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
