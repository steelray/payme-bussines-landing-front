import { AfterViewInit, Component, OnInit, Self } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { AppConfigService } from './core/services/app-config.service';
import { NgOnDestroy } from './core/services/destroy.service';
declare var preloader: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgOnDestroy]
})
export class AppComponent implements AfterViewInit, OnInit {
  isSolutionsRoute = false;

  constructor(
    private router: Router,
    @Self() private onDestroy$: NgOnDestroy,
    private appConfig: AppConfigService
  ) {
    router.events.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSolutionsRoute = router.url.indexOf('solutions') !== -1;
      }
    })
  }

  ngOnInit(): void {
    this.appConfig.getTranslates();
  }

  ngAfterViewInit(): void {
    preloader();
  }
}
