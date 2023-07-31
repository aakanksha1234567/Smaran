import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMedicineComponent } from './record-medicine.component';
import { ButtonModule, CardModule, DropdownModule, FormModule,GridModule } from '@coreui/angular';

describe('RecordMedicineComponent', () => {
  let component: RecordMedicineComponent;
  let fixture: ComponentFixture<RecordMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormModule, CardModule, GridModule, ButtonModule, DropdownModule],
      declarations: [RecordMedicineComponent]
    });
    fixture = TestBed.createComponent(RecordMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
