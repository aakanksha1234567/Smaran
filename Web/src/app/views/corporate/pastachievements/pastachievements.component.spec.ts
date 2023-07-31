import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastachievementsComponent } from './pastachievements.component';

describe('PastachievementsComponent', () => {
  let component: PastachievementsComponent;
  let fixture: ComponentFixture<PastachievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastachievementsComponent]
    });
    fixture = TestBed.createComponent(PastachievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
