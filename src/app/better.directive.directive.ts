import { Directive , ElementRef ,Renderer2 , OnInit , HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor : string = 'green'
  constructor(private elRef: ElementRef , private renderar : Renderer2) {
    this.renderar.setStyle(this.elRef.nativeElement , 'color' , 'white')

   }

  ngOnInit(): void {
    this.renderar.setStyle(this.elRef.nativeElement , 'backgroundColor' , 'green')
  }
  @HostListener('mouseenter') mouseEnter(eventData : Event){
    this.backgroundColor = 'red'
    this.renderar.setStyle(this.elRef.nativeElement , 'color' , 'white')
  }
  @HostListener('mouseleave') mouseLeave(data : Event){
    this.backgroundColor = 'transparent'
    this.elRef.nativeElement.style.color = 'black'
  }
}
