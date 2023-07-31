import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBudgetComponent } from './manage-budget.component';

describe('ManageBudgetComponent', () => {
  let component: ManageBudgetComponent;
  let fixture: ComponentFixture<ManageBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBudgetComponent]
    });
    fixture = TestBed.createComponent(ManageBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
