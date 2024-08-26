import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
  standalone: true
})
export class LightBoxDirective {
  @HostListener('mouseover') mouseover() {
    this.elemRef.nativeElement.style.border = "3px solid blue";

  }
  @HostListener('mouseout') mouseout() {
    this.elemRef.nativeElement.style.border = "3px solid green";

  }
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = "3px solid red";
  }

}
