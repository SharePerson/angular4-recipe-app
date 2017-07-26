import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private toggle = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') clickEvent (eventData: Event)
  {
    if(this.toggle)
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    else
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    this.toggle = !this.toggle;
  }

}
