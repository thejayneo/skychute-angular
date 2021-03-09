import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-parent-app-three',
  templateUrl: './parent-app-three.component.html',
  styleUrls: ['./parent-app-three.component.css']
})
export class ParentAppThreeComponent implements OnInit {
  currentValue: string;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.helperService.getInput(this.currentValue);
  }
}

