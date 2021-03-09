import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-app-three',
  templateUrl: './parent-app-three.component.html',
  styleUrls: ['./parent-app-three.component.css']
})
export class ParentAppThreeComponent implements OnInit {
  currentValue = '';
  subscribedInput = new Observable(function subscribe(observed): void {
    observed.next(ParentAppThreeComponent.currentValue);
  });

  constructor() {
  }

  ngOnInit(): void {
  }
}

