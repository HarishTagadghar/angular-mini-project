import { OnInit,Directive , ElementRef} from '@angular/core'

@Directive({
selector:'[greenBackground]'
})

export  class CustomDirective implements OnInit{
    constructor(public elementRef : ElementRef ){}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'red'
    }
}