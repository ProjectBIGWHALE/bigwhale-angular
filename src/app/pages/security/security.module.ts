import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { UtilsModule } from 'src/app/components/utils/utils.module';

import { CryptographComponent } from './cryptograph/cryptograph.component';
import { QrcodegeneratorComponent } from './qrcodegenerator/qrcodegenerator.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SecurityComponent } from './security.component';
import { TranslateModule } from '@ngx-translate/core';


const importedComponents = [
  CryptographComponent,
  QrcodegeneratorComponent,
  SecurityComponent
]

@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    UtilsModule,
    TranslateModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  exports: importedComponents
})
export class SecurityModule { }
