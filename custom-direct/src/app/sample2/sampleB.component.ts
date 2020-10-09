import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
export {SampleComponent} from 'src/app/sample/sample.component';

@Component({
  selector: 'app-sample-b',
  templateUrl: './sampleB.component.html',
  styleUrls: ['./sampleB.component.css']
})
export class SampleBComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('myTemp') temp: TemplateRef<any>;
  @ViewChild('myCont', {read: ViewContainerRef}) myCont: ViewContainerRef;
  @ViewChild('myP') p: ElementRef;
  @ViewChild('htTemp') htTemp: ElementRef;

  isShown = false;


  constructor(private hostElement: ElementRef,
              private viewContainer: ViewContainerRef,
              private injector: Injector,
              private r: ComponentFactoryResolver) {
    // const factory = this.r.resolveComponentFactory(null);
    // const componentRef = factory.create(injector);
    // const view = componentRef.hostView;
  }

  ngAfterViewInit(): void {
    console.log(this.viewContainer.createEmbeddedView(this.temp));
    console.log('temp-AfterViewInit', this.temp.elementRef);
    console.log('htTemp-AfterViewInit', this.htTemp);
    console.log('myCont-AfterViewInit', this.myCont);
    // console.log('p-AfterViewInit', this.p);
  }

  ngAfterContentInit(): void {
    // console.log('temp-AfterContentInit', this.temp);
    // console.log('p-AfterContentInit', this.p);
    }

  ngOnInit(): void {
    // console.log('temp-OnInit', this.temp);
    // console.log('p-OnInit', this.p);
  }

  Switch(): void {
    this.isShown = !this.isShown;
    console.log(this.temp.elementRef);
  }
}
