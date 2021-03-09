import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helperInput = new BehaviorSubject('');
  constructor() { }

  getInput(inputText: string): void {
    this.helperInput.next(inputText);
  }

  setInput(): string {
    return this.helperInput.getValue();
  }
}

