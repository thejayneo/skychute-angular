import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-app-one',
  templateUrl: './parent-app-one.component.html',
  styleUrls: ['./parent-app-one.component.css']
})
export class ParentAppOneComponent implements OnInit {
  @Input() currentInput: string;
  constructor() { }

  ngOnInit(): void {
  }
}
