import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-cryptograph',
  templateUrl: './cryptograph.component.html',
  styleUrls: ['./cryptograph.component.css']
})
export class CryptographComponent {


  constructor(public translate: TranslateService, private languageService: LanguageService) {

    translate.setDefaultLang('pt-BR');
  }
 

  saveLanguage() {
    this.languageService.setLanguage(this.languageService.getLanguage());
  }


}
