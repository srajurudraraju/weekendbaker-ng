import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[looper]',
})
export class LooperDirective implements OnInit {
  @Input()
  looperOf: any[] = [];
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() {
    console.log('Looper:', this.looperOf);
    this.looperOf.forEach((value, index) =>
      this.viewContainer.createEmbeddedView(
        this.template,
        { $implicit: value },
        index
      )
    );
  }
}
