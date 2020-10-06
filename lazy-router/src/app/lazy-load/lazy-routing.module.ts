import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LazyItemComponent} from '../lazy-item/lazy-item.component';

const routes: Routes = [
  {
    path: 'lazy',
    component: LazyItemComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }
