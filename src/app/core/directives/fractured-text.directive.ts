import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";
declare var initFracturedTextHover: any;
@Directive({
  selector: '[fracturedText]'
})
export class FracturedTextDirective implements OnChanges {
  @Input('fracturedText') fracturedText: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fracturedText.previousValue !== changes.fracturedText.currentValue) {
      this.el.nativeElement.textContent = changes.fracturedText.currentValue;
      this.renderer.removeClass(this.el.nativeElement, 'text-has-fractured');
      initFracturedTextHover();
    }
  }


}