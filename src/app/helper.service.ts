import { Injectable } from '@angular/core';
import { ParentAppThreeComponent } from './parent-app-three/parent-app-three.component';
import { Observable, of } from 'rxjs';
import { ParentAppOneComponent } from './parent-app-one/parent-app-one.component';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  static helperInput: string;
  constructor() { }

  getInput(): Observable<string> {
    const helperInput = of(ParentAppThreeComponent.currentValue);
    return helperInput;
  }
}
