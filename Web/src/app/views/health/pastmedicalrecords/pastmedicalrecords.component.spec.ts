import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastmedicalrecordsComponent } from './pastmedicalrecords.component';

describe('PastmedicalrecordsComponent', () => {
  let component: PastmedicalrecordsComponent;
  let fixture: ComponentFixture<PastmedicalrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastmedicalrecordsComponent]
    });
    fixture = TestBed.createComponent(PastmedicalrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
