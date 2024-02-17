import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuAboutComponent } from './menu-about/menu-about.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuLogoComponent } from './menu-logo/menu-logo.component';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    MenuAboutComponent,
    MenuBarComponent,
    MenuLogoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
  ],
  exports: [
    MenuAboutComponent,
    MenuBarComponent,
    MenuLogoComponent,
    HomeComponent
  ]
})
export class HomeModule { }
