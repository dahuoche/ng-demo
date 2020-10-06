import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyRoutingModule} from './lazy-routing.module';
import {LazyItemComponent} from '../lazy-item/lazy-item.component';



@NgModule({
  declarations: [LazyItemComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyLoadModule { }
