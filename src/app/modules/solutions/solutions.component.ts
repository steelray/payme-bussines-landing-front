import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ISolution } from 'src/app/core/interfaces/solution.interface';
import { SolutionService } from 'src/app/core/services/solution.service';
declare var initFracturedTextHover: any;

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolutionsComponent implements OnInit {
  solution$: Observable<ISolution>;
  slug: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private solutionService: SolutionService
  ) { }

  ngOnInit(): void {

    // initFracturedTextHover();

    this.solution$ = this.activatedRoute.params.pipe(
      tap(params => this.slug = params.slug),
      switchMap(params => this.solutionService.fetchOne(params.slug))
    );

  }

}
