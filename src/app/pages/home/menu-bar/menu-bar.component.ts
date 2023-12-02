import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {




  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt-BR');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pt-BR|en/) ? browserLang : 'pt-BR');
  }

  // Função para alternar o idioma para inglês
  switchToEnglish() {
    this.translate.use('en');
  }

  // Função para alternar o idioma para português
  switchToPortuguese() {
    this.translate.use('pt-BR');
  }
  switchToEspanol() {
    this.translate.use('es');
  }










}
