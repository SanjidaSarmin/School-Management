import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionfeesComponent } from './tuitionfees.component';

describe('TuitionfeesComponent', () => {
  let component: TuitionfeesComponent;
  let fixture: ComponentFixture<TuitionfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuitionfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuitionfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
