import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[setmycolorhilight]'
})
export class SetmycolorhilightDirective {

  constructor(private element: ElementRef) { 
      element.nativeElement.style.color = '#737373';

  }
  
  @HostListener('mouseenter') setColorOnMouseEnter(){
      this.SetColor("#4d94ff")
   
 }

  @HostListener('mouseleave') setColorOnMouseLeave(){
      this.SetColor("#737373")
   
 }

 private SetColor(color:String){
     this.element.nativeElement.style.color=color;
 }

}
