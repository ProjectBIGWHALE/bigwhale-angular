import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AltercolorComponent } from './pages/design/altercolor/altercolor.component';
import { ColorspaletteComponent } from './pages/design/colorspalette/colorspalette.component';
import { ImageconverterComponent } from './pages/documents/imageconverter/imageconverter.component';
import { CompactconverterComponent } from './pages/documents/compactconverter/compactconverter.component';
import { CertificategeneratorComponent } from './pages/documents/certificategenerator/certificategenerator.component';
import { CryptographComponent } from './pages/security/cryptograph/cryptograph.component';
import { QrcodegeneratorComponent } from './pages/security/qrcodegenerator/qrcodegenerator.component';
import { ServiceUnavailableComponent } from './pages/service-unavailable/service-unavailable.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'home', component: HomeComponent, title: 'My big Whale - Home' },
      {
        path: 'design',
        children: [
          {
            path: 'altercolor', component: AltercolorComponent, title: 'My big Whale - Home'
          },
          {
            path: 'colorspalette', component: ColorspaletteComponent, title: 'My big Whale - Paleta de Cores'
          }
        ]
      },
      {
        path: 'documents',
        children: [
          {
            path: 'image-converter', component: ImageconverterComponent, title: 'My big Whale - Conversor de Images'
          },
          {
            path: 'compact-converter', component: CompactconverterComponent, title: 'My big Whale - Conversor ZIP'
          },
          {
            path: 'certificate-generator', component: CertificategeneratorComponent, title: 'My big Whale - Certificados'
          }
        ]
      },
      {
        path: 'security', 
        children: [
          {
            path: 'cryptograph', component: CryptographComponent, title: 'My big Whale - Guardião'
          },
          {
            path: 'qrcodegenerator', component: QrcodegeneratorComponent, title: 'My big Whale - QR Code'
          }
        ]
      },
      {
        path: 'service-unavailable', component: ServiceUnavailableComponent, title: 'Erro 503 - Serviço Indisponível'
      },
      {
        path: '**', component: NotFoundComponent, title: 'Page not Found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
