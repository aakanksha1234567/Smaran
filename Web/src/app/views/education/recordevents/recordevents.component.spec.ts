import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordeventsComponent } from './recordevents.component';

describe('RecordeventsComponent', () => {
  let component: RecordeventsComponent;
  let fixture: ComponentFixture<RecordeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordeventsComponent]
    });
    fixture = TestBed.createComponent(RecordeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
