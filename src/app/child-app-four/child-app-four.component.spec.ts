import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAppFourComponent } from './child-app-four.component';

describe('ChildAppFourComponent', () => {
  let component: ChildAppFourComponent;
  let fixture: ComponentFixture<ChildAppFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAppFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAppFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
