import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentassingmentComponent } from './studentassingment.component';

describe('StudentassingmentComponent', () => {
  let component: StudentassingmentComponent;
  let fixture: ComponentFixture<StudentassingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentassingmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentassingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
