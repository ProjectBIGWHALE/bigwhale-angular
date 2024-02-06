import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-bigwhale';

  constructor(
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const savedLanguage = this.languageService.getLanguage();
    this.translateService.use(savedLanguage);
  }
}
