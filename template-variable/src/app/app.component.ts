import { Component } from '@angular/core';
import {SampleComponent} from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-variable';

  ngIf = false;
  sampleComponent = SampleComponent;
  items = [1, 2, 3, 4, 5];

  Switch(): void {
    this.ngIf = !this.ngIf;
  }
}
