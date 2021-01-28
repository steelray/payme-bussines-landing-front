import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    PipesModule
  ]
})
export class TutorialModule { }
