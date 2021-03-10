import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppFourComponent } from './parent-app-four.component';

describe('ParentAppFourComponent', () => {
  let component: ParentAppFourComponent;
  let fixture: ComponentFixture<ParentAppFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAppFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
