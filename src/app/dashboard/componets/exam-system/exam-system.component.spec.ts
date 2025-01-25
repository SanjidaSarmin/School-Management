import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSystemComponent } from './exam-system.component';

describe('ExamSystemComponent', () => {
  let component: ExamSystemComponent;
  let fixture: ComponentFixture<ExamSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
