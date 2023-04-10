import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesUpcomingComponent } from './leaves-upcoming.component';

describe('LeavesUpcomingComponent', () => {
  let component: LeavesUpcomingComponent;
  let fixture: ComponentFixture<LeavesUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
