import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

import { CardComponent } from './card/card.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { MenuCarrosselComponent } from './menu-carrossel/menu-carrossel.component';
import { NavHomeHelpComponent } from './nav-home-help/nav-home-help.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    CardComponent,
    CollaboratorComponent,
    MenuCarrosselComponent,
    NavHomeHelpComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    ReactiveFormsModule
  ],
  exports: [
    UtilsModule,
    CardComponent,
    CollaboratorComponent,
    MenuCarrosselComponent,
    NavHomeHelpComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
