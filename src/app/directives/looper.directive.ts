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
  looper: any[] = [];
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() {
    console.log('Looper:', this.looper);
    this.looper.forEach((value) =>
      this.viewContainer.createEmbeddedView(this.template)
    );
  }
}
