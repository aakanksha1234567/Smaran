import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordachievementsComponent } from './recordachievements.component';

describe('RecordachievementsComponent', () => {
  let component: RecordachievementsComponent;
  let fixture: ComponentFixture<RecordachievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordachievementsComponent]
    });
    fixture = TestBed.createComponent(RecordachievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
