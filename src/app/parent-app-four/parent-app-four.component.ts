import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-app-four',
  templateUrl: './parent-app-four.component.html',
  styleUrls: ['./parent-app-four.component.css']
})
export class ParentAppFourComponent implements OnInit {
  inputText: string;
  subscription: Subscription;

  constructor(private helperService: HelperService) { }

  ngOnInit(): void{
    this.subscription = this.helperService.currentText.subscribe(text => this.inputText = text);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
