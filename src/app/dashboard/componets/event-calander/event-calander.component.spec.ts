import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalanderComponent } from './event-calander.component';

describe('EventCalanderComponent', () => {
  let component: EventCalanderComponent;
  let fixture: ComponentFixture<EventCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
