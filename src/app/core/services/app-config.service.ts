import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { publishReplay, refCount, tap } from 'rxjs/operators';
import { APP_LANGUAGES } from '../enums/app-languages.enum';
import { ITranslate } from '../interfaces/translate.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends ApiService {
  private readonly langIndex = '__lang';
  currentLanguage$ = new BehaviorSubject<string>(null);
  translates$ = new BehaviorSubject<ITranslate[]>([]);

  constructor(
    public http: HttpClient
  ) {
    super(http);
    const currentLanguage = localStorage.getItem(this.langIndex) || APP_LANGUAGES.RU;
    this.currentLanguage$.next(currentLanguage);
  }

  setCurrentLanguage(lang: APP_LANGUAGES): void {
    localStorage.setItem(this.langIndex, lang);
    this.currentLanguage$.next(lang);
  }

  currentLanguageObservable(): Observable<string> {
    return this.currentLanguage$.asObservable();
  }

  getTranslates(): void {
    this.get<ITranslate[]>('translates').subscribe(translates => this.translates$.next(translates));
  }

}