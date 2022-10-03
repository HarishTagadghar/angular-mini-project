import { Directive , ElementRef ,Renderer2 , OnInit , HostListener , HostBinding , Input} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
@Input() userColor :string = 'green'
  @HostBinding('style.backgroundColor') backgroundColor : string;
  constructor(private elRef: ElementRef , private renderar : Renderer2) {
    this.renderar.setStyle(this.elRef.nativeElement , 'color' , 'black')

   }

  ngOnInit(): void {
    // this.renderar.setStyle(this.elRef.nativeElement , 'backgroundColor' , 'green')
    this.backgroundColor = this.userColor

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
