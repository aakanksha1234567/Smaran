import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordmeetingsComponent } from './recordmeetings.component';

describe('RecordmeetingsComponent', () => {
  let component: RecordmeetingsComponent;
  let fixture: ComponentFixture<RecordmeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordmeetingsComponent]
    });
    fixture = TestBed.createComponent(RecordmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
