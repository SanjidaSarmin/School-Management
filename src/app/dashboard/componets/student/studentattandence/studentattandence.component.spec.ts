import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattandenceComponent } from './studentattandence.component';

describe('StudentattandenceComponent', () => {
  let component: StudentattandenceComponent;
  let fixture: ComponentFixture<StudentattandenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentattandenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentattandenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
