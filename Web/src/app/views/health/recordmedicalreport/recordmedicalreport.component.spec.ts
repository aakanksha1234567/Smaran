import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordmedicalreportComponent } from './recordmedicalreport.component';

describe('RecordmedicalreportComponent', () => {
  let component: RecordmedicalreportComponent;
  let fixture: ComponentFixture<RecordmedicalreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordmedicalreportComponent]
    });
    fixture = TestBed.createComponent(RecordmedicalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
