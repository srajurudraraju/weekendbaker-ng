import { Component, Input } from '@angular/core';

@Component({
  selector: 'wb-social',
  template: `<p>
    <span>{{ title }}</span>
  </p>`,
  styles: ['p {color: red;}'],
})
export class SocialComponent {
  @Input()
  title: string;

  @Input()
  icon?: string;

  constructor() {
    this.title = 'Facebook';
  }
}
