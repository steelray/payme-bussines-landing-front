import { Component, ChangeDetectionStrategy, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { appLanguages } from 'src/app/core/const/app-languages';
import { APP_LANGUAGES } from 'src/app/core/enums/app-languages.enum';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { NgOnDestroy } from 'src/app/core/services/destroy.service';
declare var langSwitch, fixedHeader, toggleDropdown: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  languages = appLanguages;
  currentLanguage$: Observable<string>;
  constructor(
    private appConfig: AppConfigService,
  ) {
    // router.events.pipe(
    //   takeUntil(this.onDestroy$)
    // ).subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     scrollToTop();
    //   }
    // })
  }

  ngOnInit(): void {
    this.currentLanguage$ = this.appConfig.currentLanguage$;
  }

  ngAfterViewInit(): void {
    langSwitch();
    fixedHeader();
    toggleDropdown();
  }

  onLanguageSwitch(event: Event, lang: APP_LANGUAGES): void {
    event.preventDefault();
    this.appConfig.setCurrentLanguage(lang);
  }

}
