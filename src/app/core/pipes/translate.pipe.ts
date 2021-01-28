import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppConfigService } from "../services/app-config.service";

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private appConfig: AppConfigService,
  ) {
  }

  transform(source: string): Observable<string> {
    return this.appConfig.translates$.pipe(
      map(translates => {
        const translate = translates.find(translate => translate.source === source);
        if (translate && translate.translation) {
          return translate.translation;
        }
        return source;
      })
    )
  }
}