import { NgModule } from "@angular/core";
import { FracturedTextDirective } from "./fractured-text.directive";
import { SetRandomTagClassDirective } from "./set-random-tag-class.directive";
const DIRECTIVES = [
  FracturedTextDirective,
  SetRandomTagClassDirective
];
@NgModule({
  exports: DIRECTIVES,
  declarations: DIRECTIVES
})
export class DirectivesModule { }