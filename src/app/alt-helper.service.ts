import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helperInput = new BehaviorSubject('');
  currentText = this.helperInput.asObservable();

  initService(text: string): void{
    this.helperInput.next(text);
  }
}

