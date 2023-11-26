import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AltercolorComponent } from './altercolor/altercolor.component';
import { ColorspaletteComponent } from './colorspalette/colorspalette.component';
import { ComponentsModule } from 'src/app/components/components.module';


const importedComponents = [
  ColorspaletteComponent,
  AltercolorComponent,
]

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: importedComponents
})
export class DesignModule { }
