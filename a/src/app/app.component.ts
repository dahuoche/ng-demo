import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'Angular' + VERSION.major;
  id;
  res;

  constructor(private http: HttpClient) { }

  CallApi(): void {
    if ( this.id > 10 || this.id < 1) {
      alert('invalid input');
    }else {
      this.GetApi().subscribe(res => {
        this.res = res;
        console.log(res);
      });
    }
  }

  GetApi(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users?id=' + this.id)
      .pipe(tap(res => {
        return res;
      }));
  }
}
