import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { CertificategeneratorComponent } from './certificategenerator/certificategenerator.component';
import { CompactconverterComponent } from './compactconverter/compactconverter.component';
import { ImageconverterComponent } from './imageconverter/imageconverter.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DocumentsComponent } from './documents.component';

const importedComponents = [
  CertificategeneratorComponent,
  CompactconverterComponent,
  ImageconverterComponent,
  DocumentsComponent
]

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ],
  exports: importedComponents,
})
export class DocumentsModule { }
