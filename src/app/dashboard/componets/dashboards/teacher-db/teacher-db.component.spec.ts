import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDBComponent } from './teacher-db.component';

describe('TeacherDBComponent', () => {
  let component: TeacherDBComponent;
  let fixture: ComponentFixture<TeacherDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
