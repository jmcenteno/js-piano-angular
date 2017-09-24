import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardEvents]'
})
export class KeyboardEventsDirective {

  constructor(element: ElementRef) { }

  @HostListener('keydown') onKeyDown(e: Event) {

    

  }

}
