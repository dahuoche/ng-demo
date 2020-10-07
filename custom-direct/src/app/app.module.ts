import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CNgIfDirective } from './custom-ng-if/c-ng-if.directive';
import { CShowDirective } from './custom-show/c-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    CNgIfDirective,
    CShowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
