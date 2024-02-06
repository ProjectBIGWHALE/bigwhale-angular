import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {

  constructor(private router: Router, private languageService: LanguageService, public translate: TranslateService) {
    translate.setDefaultLang('pt-BR');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pt-BR|en|es/) ? browserLang : 'pt-BR');
  }


  switchLanguage(language: string): void {
    this.translate.use(language);
    this.languageService.setLanguage(language);
    this.updateRouteLanguage(); // Atualiza o idioma na rota
  }

  private updateRouteLanguage(): void {
    const savedLanguage = this.languageService.getLanguage();
    const currentRoute = this.router.url;
    const updatedRoute = currentRoute.replace(/\/[a-z]{2}-[A-Z]{2}\//, `/${savedLanguage}/`);
    this.router.navigateByUrl(updatedRoute);
  }







}
