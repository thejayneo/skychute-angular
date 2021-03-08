import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppThreeComponent } from './parent-app-three.component';

describe('ParentAppThreeComponent', () => {
  let component: ParentAppThreeComponent;
  let fixture: ComponentFixture<ParentAppThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAppThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
