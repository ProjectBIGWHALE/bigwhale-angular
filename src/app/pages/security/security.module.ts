import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { UtilsModule } from 'src/app/components/utils/utils.module';

import { CryptographComponent } from './cryptograph/cryptograph.component';
import { QrcodegeneratorComponent } from './qrcodegenerator/qrcodegenerator.component';
import { ComponentsModule } from 'src/app/components/components.module';


const importedComponents = [
  CryptographComponent,
  QrcodegeneratorComponent,
]

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    UtilsModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  exports: importedComponents
})
export class SecurityModule { }
