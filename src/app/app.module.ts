import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentAppOneComponent } from './parent-app-one/parent-app-one.component';
import { ChildAppOneComponent } from './child-app-one/child-app-one.component';
import { MatInputModule } from '@angular/material/input';
import { ChildAppTwoComponent } from './child-app-two/child-app-two.component';
import { ParentAppTwoComponent } from './parent-app-two/parent-app-two.component';
import { ParentAppThreeComponent } from './parent-app-three/parent-app-three.component';
import { ChildAppThreeComponent } from './child-app-three/child-app-three.component';
import { HelperService } from './helper.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentAppOneComponent,
    ChildAppOneComponent,
    ChildAppTwoComponent,
    ParentAppTwoComponent,
    ParentAppThreeComponent,
    ChildAppThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
