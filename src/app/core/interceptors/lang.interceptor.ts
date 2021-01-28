import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppConfigService } from '../services/app-config.service';

@Injectable()
export class LangInterceptor implements HttpInterceptor {

  constructor(private appConfig: AppConfigService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.appConfig.currentLanguage$.pipe(
      switchMap(lang => {
        request = request.clone({
          setParams: {
            lang
          }
        });
        return next.handle(request);
      })
    );
  }
}