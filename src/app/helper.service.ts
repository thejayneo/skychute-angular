import { Injectable } from '@angular/core';
import { ParentAppThreeComponent } from './parent-app-three/parent-app-three.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }

  getInput(): Observable<string> {
    const helperInput = of(ParentAppThreeComponent.currentValue);
    return helperInput;
  }
}
