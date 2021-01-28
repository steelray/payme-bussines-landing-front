import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogItemComponent } from './blog-item.component';

const routes: Routes = [{ path: '', component: BlogItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogItemRoutingModule { }
