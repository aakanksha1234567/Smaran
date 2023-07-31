import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritenotesComponent } from './writenotes.component';

describe('WritenotesComponent', () => {
  let component: WritenotesComponent;
  let fixture: ComponentFixture<WritenotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritenotesComponent]
    });
    fixture = TestBed.createComponent(WritenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
