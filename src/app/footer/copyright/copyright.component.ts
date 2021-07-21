import { Component } from '@angular/core';

@Component({
  selector: 'wb-copyright',
  template: `<p>Copyright &copy; {{ year }}</p>`,
  styles: ['p {color: green;}'],
})
export class CopyrightComponent {
  year: number = new Date().getFullYear();
}
