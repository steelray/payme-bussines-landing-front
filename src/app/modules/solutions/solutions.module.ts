import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';


@NgModule({
  declarations: [SolutionsComponent],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    PipesModule,
    DirectivesModule
  ]
})
export class SolutionsModule { }
