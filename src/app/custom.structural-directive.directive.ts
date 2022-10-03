import { Directive ,Input , TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngShow]'
})
export class CustomStructuralDirectiveDirective {

  @Input() set ngShow(condition:boolean){
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    }
    else{
    this.vcRef.clear()
    }
  }
  constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

}
