import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  IterableDiffers,
  IterableDiffer, DoCheck, ViewRef, EmbeddedViewRef
} from '@angular/core';

@Directive({
  selector: '[appCNgFor]'
})
export class CustomNgForDirective implements DoCheck {

  items: any;
  difference: IterableDiffer<any>;
  map: Map<any, ViewRef> = new Map<any, ViewRef>();

  @Input('appCNgForOf') set appCNgForOf(items) {
    this.items = items;
    this.difference = this.differs.find(items).create((index, item) => {

    });
  };

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private differs: IterableDiffers) { }

  ngDoCheck(): void {
    if (this.difference) {
      const changes = this.difference.diff(this.items);
      if (changes) {
        changes.forEachAddedItem((item) => {
          const embeddedView = this.viewContainerRef
            .createEmbeddedView(this.templateRef, {$implicit: item.item});
          this.map.set(item.item, embeddedView);
        });
        changes.forEachRemovedItem((item) => {
          const currView = this.map.get(item.item);
          const viewIndex = this.viewContainerRef.indexOf(currView);
          this.viewContainerRef.remove(viewIndex);
          this.map.delete(item.item);
        });
        changes.forEachIdentityChange((item) => {
          let currView: EmbeddedViewRef<any>;
          // @ts-ignore
          currView = this.map.get(item.item);
          (currView.context).$implicit = item.item;
        });
      }

    }
  }


}
