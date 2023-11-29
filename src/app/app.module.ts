import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
//modulos de importações
import { DesignModule } from './pages/design/design.module';
import { SecurityModule } from './pages/security/security.module';
import { DocumentsModule } from './pages/documents/documents.module';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DesignModule,
    SecurityModule,
    DocumentsModule,
    FormsModule,
    ComponentsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
