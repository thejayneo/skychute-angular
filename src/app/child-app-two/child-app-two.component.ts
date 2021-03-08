import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app-two',
  templateUrl: './child-app-two.component.html',
  styleUrls: ['./child-app-two.component.css']
})
export class ChildAppTwoComponent implements OnInit {
  @Output() childTextInput = new EventEmitter<string>();
  text: string;

  updateText(text: string){
    this.childTextInput.emit(text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
