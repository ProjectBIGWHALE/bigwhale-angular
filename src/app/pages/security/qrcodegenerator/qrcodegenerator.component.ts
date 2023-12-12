import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-qrcodegenerator',
  templateUrl: './qrcodegenerator.component.html',
  styleUrls: ['./qrcodegenerator.component.css']
})
export class QrcodegeneratorComponent implements OnInit {

  constructor(public translate: TranslateService, private languageService: LanguageService) {

    translate.setDefaultLang('pt-BR');
  }
  ngOnInit(): void {

  }

  saveLanguage() {
    this.languageService.setLanguage(this.languageService.getLanguage());
  }


}
