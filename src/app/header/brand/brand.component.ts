import { Component } from "@angular/core";
@Component({
  selector: "wb-brand",
  template: `<a class="navbar-brand" href="#">
    <img
      src="/assets/images/logo.png"
      alt=""
      width="30"
      height="30"
      class="d-inline-block align-text-top"
    />
    WeekendBaker <sub>by PC</sub>
  </a>`,
})
export class BrandComponent {
  constructor() {}
}
