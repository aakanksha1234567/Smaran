import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordtasksComponent } from './recordtasks.component';

describe('RecordtasksComponent', () => {
  let component: RecordtasksComponent;
  let fixture: ComponentFixture<RecordtasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordtasksComponent]
    });
    fixture = TestBed.createComponent(RecordtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
