import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAppTwoComponent } from './child-app-two.component';

describe('ChildAppTwoComponent', () => {
  let component: ChildAppTwoComponent;
  let fixture: ComponentFixture<ChildAppTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAppTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
