import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { UtilsModule } from 'src/app/components/utils/utils.module';

import { CertificategeneratorComponent } from './certificategenerator/certificategenerator.component';
import { CompactconverterComponent } from './compactconverter/compactconverter.component';
import { ImageconverterComponent } from './imageconverter/imageconverter.component';
import { PreviewCertificateComponent } from 'src/app/components/preview-certificate/preview-certificate.component';
import { PreviewsModule } from 'src/app/components/preview-certificate/previews.module';


const importedComponents = [
  CertificategeneratorComponent,
  CompactconverterComponent,
  ImageconverterComponent,
  PreviewCertificateComponent,
  
]

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    UtilsModule,
    ReactiveFormsModule,
    FormsModule,
    PreviewsModule

  ],
  exports: importedComponents,
})
export class DocumentsModule { }
