import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppOneComponent } from './parent-app-one.component';

describe('ParentAppOneComponent', () => {
  let component: ParentAppOneComponent;
  let fixture: ComponentFixture<ParentAppOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAppOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
