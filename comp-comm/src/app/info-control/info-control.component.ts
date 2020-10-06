import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-control',
  templateUrl: './info-control.component.html',
  styleUrls: ['./info-control.component.css']
})
export class InfoControlComponent implements OnInit {

  @Output()
  inputEmitter = new EventEmitter();

  inputValue: string;
  isToggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  inputChangeHandler($event): void {
    this.inputValue = $event.target.value;
    this.inputEmitter.emit(this.inputValue);
  }

}
