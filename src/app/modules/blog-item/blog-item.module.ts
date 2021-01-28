import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogItemRoutingModule } from './blog-item-routing.module';
import { BlogItemComponent } from './blog-item.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [BlogItemComponent],
  imports: [
    CommonModule,
    BlogItemRoutingModule,
    PipesModule
  ]
})
export class BlogItemModule { }
