import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ISolution } from 'src/app/core/interfaces/solution.interface';
import { SolutionService } from 'src/app/core/services/solution.service';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryNavComponent implements OnInit {
  solutions$: Observable<ISolution[]>;
  constructor(
    private solutionService: SolutionService
  ) { }

  ngOnInit(): void {
    this.solutions$ = this.solutionService.fetchAll();
  }

}
