import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly sanitize: DomSanitizer) { }
  public transform(value: string): SafeHtml {
    return this.sanitize.bypassSecurityTrustHtml(value);
  }
}
