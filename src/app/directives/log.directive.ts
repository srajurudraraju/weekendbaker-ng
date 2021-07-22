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

  @HostBinding('style.color')
  color: string = 'red';

  @HostBinding('class.active')
  active: boolean = true;

  @HostBinding('class.inactive')
  inactive: boolean = false;

  @HostBinding('class')
  classes: string = 'one';

  @HostListener('click', ['$event.target'])
  log(target: any) {
    this.logging = this.logging === 'logging' ? 'not logging' : 'logging';
    this.color = this.color === 'red' ? 'green' : 'red';
    this.active = !this.active;
    this.inactive = !this.inactive;
    this.classes = this.classes + ' ' + Math.random().toFixed(2);
  }
}
