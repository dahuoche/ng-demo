import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-router';
  info: string;
  constructor(public router: Router) {
  }

  changeHandler($event: Event): void {
    this.info = $event.target['value'];
    this.router.navigate(['/second/'+ this.info] ).then(() => {
      console.log(this.router);
    });
  }
}
