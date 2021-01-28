import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPage } from 'src/app/core/interfaces/page.interface';
import { ISolution } from 'src/app/core/interfaces/solution.interface';
import { PageService } from 'src/app/core/services/page.service';
import { SolutionService } from 'src/app/core/services/solution.service';
declare var checkVisibilityInit: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  solutions$: Observable<ISolution[]>;
  aboutPayme$: Observable<IPage>
  constructor(
    private solutionService: SolutionService,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.solutions$ = this.solutionService.fetchAll();
    this.aboutPayme$ = this.pageService.fetchOne('about-payme');
  }

  ngAfterViewInit(): void {
    checkVisibilityInit();

  }


}
