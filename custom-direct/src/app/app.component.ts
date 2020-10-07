import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-direct';

  ngIf = false;

  Switch(): void {
    this.ngIf = !this.ngIf;
  }
}
