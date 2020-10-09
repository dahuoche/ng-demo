import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CNgIfDirective } from './custom-ng-if/c-ng-if.directive';
import { CShowDirective } from './custom-show/c-show.directive';
import {PaneDirective, SampleComponent} from './sample/sample.component';
import { SampleBComponent } from './sample2/sampleB.component';
import { CustomNgForDirective } from './custom-ng-for/custom-ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    CNgIfDirective,
    CShowDirective,
    SampleComponent,
    PaneDirective,
    SampleBComponent,
    CustomNgForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SampleComponent]
})
export class AppModule { }
