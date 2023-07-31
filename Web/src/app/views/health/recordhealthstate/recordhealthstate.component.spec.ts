import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordhealthstateComponent } from './recordhealthstate.component';

describe('RecordhealthstateComponent', () => {
  let component: RecordhealthstateComponent;
  let fixture: ComponentFixture<RecordhealthstateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordhealthstateComponent]
    });
    fixture = TestBed.createComponent(RecordhealthstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
