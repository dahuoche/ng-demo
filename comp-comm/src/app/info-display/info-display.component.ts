import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {

  @Input()
  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
