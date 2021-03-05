import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAppOneComponent } from './child-app-one.component';

describe('ChildAppOneComponent', () => {
  let component: ChildAppOneComponent;
  let fixture: ComponentFixture<ChildAppOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAppOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
