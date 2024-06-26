import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appError]',
  standalone: true
})
export class ErrorDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
