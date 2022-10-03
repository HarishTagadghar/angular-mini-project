import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOpenDropdown]',
})
export class OpenDropdownDirective {
  @HostBinding('class.open') toggle: boolean = false;

  @HostListener('click') toggleOpen() {
    this.toggle = !this.toggle;
  }
  constructor() {}
}
