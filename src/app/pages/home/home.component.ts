import { Component, OnInit } from '@angular/core';
import {dataFake}from '../../dataFake/colaboradore'
import { dataFakeCard } from 'src/app/dataFake/data-card';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  colaboradores = dataFake
  menus = dataFakeCard


  constructor(private router: Router, private languageService: LanguageService) {}
  ngOnInit(): void {
    const savedLanguage = this.languageService.getLanguage();
    this.languageService.updateRoutesLanguage(savedLanguage);

    // Se inscreve para receber notificações sobre mudanças de idioma
    this.languageService.languageSubject.subscribe((language: string) => {
      this.languageService.updateRoutesLanguage(language);
    });
  }

  //constructor (private router: Router, private languageService: LanguageService, public translate: TranslateService){
  //  translate.setDefaultLang('pt-BR');

  //  const browserLang = translate.getBrowserLang();
 //   translate.use(browserLang?.match(/pt-BR|en|es/) ? browserLang : 'pt-BR');
 // }




  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

}

