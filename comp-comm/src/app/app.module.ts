import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Output} from '@angular/core';

import { AppComponent } from './app.component';
import { InfoControlComponent } from './info-control/info-control.component';
import { InfoDisplayComponent } from './info-display/info-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoControlComponent,
    InfoDisplayComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
