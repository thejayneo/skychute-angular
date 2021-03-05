import { Component } from '@angular/core';
import { ParentAppData } from './parent-app-one/parentAppData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
  data = new ParentAppData('');
}
