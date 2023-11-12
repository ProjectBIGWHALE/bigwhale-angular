import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Preview1Component } from './preview1/preview1.component';
import { Preview2Component } from './preview2/preview2.component';



@NgModule({
  declarations: [
    Preview1Component,
    Preview2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Preview1Component,
    Preview2Component
  ]
})
export class PreviewsModule { }
