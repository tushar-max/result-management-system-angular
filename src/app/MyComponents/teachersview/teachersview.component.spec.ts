import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersviewComponent } from './teachersview.component';

describe('TeachersviewComponent', () => {
  let component: TeachersviewComponent;
  let fixture: ComponentFixture<TeachersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
