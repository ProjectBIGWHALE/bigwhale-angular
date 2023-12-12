import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage = this.loadLanguage() || 'pt-BR';
  public languageSubject = new Subject<string>();

  languageSubject$ = this.languageSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const lang = (event.state.root.firstChild?.params as { lang: string })?.lang || this.currentLanguage;
        this.languageSubject.next(lang);
        this.updateRoutesLanguage(lang);
      }
      if (event instanceof NavigationEnd) {
        const lang = event.url.split('/')[1] || this.currentLanguage;
        this.languageSubject.next(lang);
      }
    });
  }

 public  getLanguage(): string {
    return this.currentLanguage;
  }

 public  setLanguage(language: string): void {
    this.currentLanguage = language;
    this.saveLanguage(language);
    this.router.navigate([language, ...this.router.url.split('/').slice(2)]);
  }

 public saveLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
  }

  public  loadLanguage(): string | null {
    return localStorage.getItem('selectedLanguage');
  }

  public updateRoutesLanguage(language: string): void {
    this.router.config.forEach(route => {
      if (route.path === ':lang') {
        route.path = language;
      }
    });
  }
}
