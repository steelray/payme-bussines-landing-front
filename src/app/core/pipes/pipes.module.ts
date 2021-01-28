import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocalizedDatePipe } from "./localized-date.pipe";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { TranslatePipe } from "./translate.pipe";

const pipes = [
  LocalizedDatePipe,
  SafeHtmlPipe,
  TranslatePipe
]

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class PipesModule { }