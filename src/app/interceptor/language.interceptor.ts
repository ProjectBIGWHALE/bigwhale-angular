import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Lógica do interceptor
    const language = 'pt-BR'; // Substitua com a lógica para obter o idioma desejado

    const clonedReq = req.clone({
     setHeaders: { 'Accept-Language': language }
    });

    return next.handle(clonedReq);
  }
}
