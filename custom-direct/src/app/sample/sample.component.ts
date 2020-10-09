import {Component, Directive, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector:   'pane'})
export class PaneDirective {
  @Input() id!: string;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  @ViewChild(PaneDirective)
  set pane(v: PaneDirective) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 2000);
  }
  selectedPane: string;
  shouldShow = true;
  toggle(): void {
    this.shouldShow = !this.shouldShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
