import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/core/directives/directives.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatIconModule,
    MatButtonModule,
    PipesModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class BlogModule { }
