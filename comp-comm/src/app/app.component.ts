import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-comm';

  inputHold: string  ;

  inputHoldHandler($event): void {
     this.inputHold = $event;
  }
}
