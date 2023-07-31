import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordnotesComponent } from './recordnotes.component';

describe('RecordnotesComponent', () => {
  let component: RecordnotesComponent;
  let fixture: ComponentFixture<RecordnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordnotesComponent]
    });
    fixture = TestBed.createComponent(RecordnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
