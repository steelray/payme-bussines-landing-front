import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopBlockComponent } from './top-block/top-block.component';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [HomeComponent, TopBlockComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,
    PipesModule
  ]
})
export class HomeModule { }
