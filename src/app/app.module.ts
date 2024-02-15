import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
//modulos de importações
import { DesignModule } from './pages/design/design.module';
import { SecurityModule } from './pages/security/security.module';
import { DocumentsModule } from './pages/documents/documents.module';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpErrorInterceptor } from './interceptor/HttpErrorInterceptor';
import { ServiceUnavailableComponent } from './pages/service-unavailable/service-unavailable.component';
//import { LanguageInterceptor } from './interceptor/language.interceptor';

// Gerenciar como as URLs são manipuladas no aplicativo.
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServiceUnavailableComponent,

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
    HomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/translate/', '.json');
}
