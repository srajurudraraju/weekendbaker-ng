import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-footer',
  template: `<p class="footer container" (click)="click()">
    <ng-content select="[social]"></ng-content>
    <wb-social title="Instagram"></wb-social>
    <wb-social title="Facebook"></wb-social>
    <wb-social title="WhatsApp"></wb-social>
    <ng-content select="[brand]"></ng-content>
    <wb-copyright></wb-copyright>
    <ng-content select="[rights]"></ng-content>
  </p>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    console.log('Footer component OnInit');
  }

  click() {
    console.log('Footer clicked');
  }
}
