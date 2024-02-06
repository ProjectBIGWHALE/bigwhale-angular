import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-colorspalette',
  templateUrl: './colorspalette.component.html',
  styleUrls: ['./colorspalette.component.css']
})
export class ColorspaletteComponent {
  constructor(public translate: TranslateService, private languageService: LanguageService) {

    translate.setDefaultLang('pt-BR');
  }
  ngOnInit(): void {

  }

  saveLanguage() {
    this.languageService.setLanguage(this.languageService.getLanguage());
  }

}
