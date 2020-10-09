import {Directive, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCShow]',
  exportAs: 'myShow'
})
export class CShowDirective {

  constructor(private viewContainerRef: ViewContainerRef) { }

  @HostListener('dblclick') eventHandler(): void {
    console.log(this.viewContainerRef);
  }

  @Input('appCShow') set inputHandler(input) {
    console.log(input);
  }
}

