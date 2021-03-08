import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAppThreeComponent } from './child-app-three.component';

describe('ChildAppThreeComponent', () => {
  let component: ChildAppThreeComponent;
  let fixture: ComponentFixture<ChildAppThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAppThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAppThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
