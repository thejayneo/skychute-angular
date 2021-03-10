import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helperInput = new BehaviorSubject('');

  initService(text: string): void{
    this.helperInput.next(text);
  }

  pushHelperInput(): Observable<string> {
    return this.helperInput.asObservable();
  }
}

