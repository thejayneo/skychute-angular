import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app-two',
  templateUrl: './child-app-two.component.html',
  styleUrls: ['./child-app-two.component.css']
})
export class ChildAppTwoComponent implements OnInit {
  @Output() childTextInput = new EventEmitter<string>();

  updateText(text: string): void {
    this.childTextInput.emit(text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
