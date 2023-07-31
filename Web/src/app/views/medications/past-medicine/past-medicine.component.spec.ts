import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMedicineComponent } from './past-medicine.component';

describe('PastMedicineComponent', () => {
  let component: PastMedicineComponent;
  let fixture: ComponentFixture<PastMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastMedicineComponent]
    });
    fixture = TestBed.createComponent(PastMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
