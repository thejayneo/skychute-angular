import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-app-one',
  templateUrl: './child-app-one.component.html',
  styleUrls: ['./child-app-one.component.css']
})

export class ChildAppOneComponent implements OnChanges {
  @Input() inputText: string;
  currentText: string;
  constructor() {}

  ngOnChanges(): void {
    this.currentText = this.inputText;
  }
}
