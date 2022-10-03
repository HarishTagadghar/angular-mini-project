import { Directive , ElementRef ,Renderer2 , OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private elRef: ElementRef , private renderar : Renderer2) {
    this.renderar.setStyle(this.elRef.nativeElement , 'color' , 'white')

   }

  ngOnInit(): void {
    this.renderar.setStyle(this.elRef.nativeElement , 'backgroundColor' , 'green')
  }
}
