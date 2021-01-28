import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[setRandomTagClass]'
})
export class SetRandomTagClassDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.tagClasses[Math.floor(Math.random() * this.tagClasses.length)]);
  }

  get tagClasses(): string[] {
    return [
      '__orange',
      '__green',
      '__yellow'
    ];
  }


}