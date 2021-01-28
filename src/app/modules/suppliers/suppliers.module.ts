import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [SuppliersComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    PipesModule,
    GoogleMapsModule
  ]
})
export class SuppliersModule { }
