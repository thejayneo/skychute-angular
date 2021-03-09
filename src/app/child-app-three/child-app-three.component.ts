import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-child-app-three',
  templateUrl: './child-app-three.component.html',
  styleUrls: ['./child-app-three.component.css']
})

export class ChildAppThreeComponent implements OnInit {
  inputText: string;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void{
    this.getInput();
  }

  getInput(): void{
    this.helperService.getInput()
      .subscribe(helperInput => this.inputText = helperInput);
  }
}
