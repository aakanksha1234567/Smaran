import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastnotesComponent } from './pastnotes.component';

describe('PastnotesComponent', () => {
  let component: PastnotesComponent;
  let fixture: ComponentFixture<PastnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastnotesComponent]
    });
    fixture = TestBed.createComponent(PastnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
