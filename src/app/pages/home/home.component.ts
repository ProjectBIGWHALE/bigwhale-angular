import { Component } from '@angular/core';
import {dataFake}from '../../dataFake/colaboradore'
import { dataFakeCard } from 'src/app/dataFake/data-card';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  colaboradores = dataFake
  menus = dataFakeCard



  constructor (public translate: TranslateService){
    translate.setDefaultLang('pt-BR');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pt-BR|en/) ? browserLang : 'pt-BR');
  }
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
