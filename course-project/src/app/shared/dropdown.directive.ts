import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {
  @HostBinding('class') class: string = '';

  constructor(private elRef: ElementRef){}

  @HostListener(`click`) toggleClass(eventData: Event){
    this.class = this.class == ''? 'open': '';
  }
}
