import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-comm';

  inputHold: string;

  @ViewChild('infoCtrlRef') infoCtrlRef: ElementRef;

  inputHoldHandler($event): void {
     this.inputHold = $event;
  }
}
