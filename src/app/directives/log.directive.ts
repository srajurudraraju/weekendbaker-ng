import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[log]',
})
export class LogDirective {
  constructor(private element: ElementRef) {}
  @HostBinding('attr.log')
  logging: string = 'logging';

  @HostListener('click', ['$event.target'])
  log(target: any) {
    this.logging = this.logging === 'logging' ? 'not logging' : 'logging';
  }
}
