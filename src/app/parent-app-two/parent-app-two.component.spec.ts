import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppTwoComponent } from './parent-app-two.component';

describe('ParentAppTwoComponent', () => {
  let component: ParentAppTwoComponent;
  let fixture: ComponentFixture<ParentAppTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAppTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
