import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private element: ElementRef) { 
      element.nativeElement.style.backgroundColor = '#4d94ff';
   
  }

 @HostListener('mouseenter') setColorOnMouseEnter(){
      this.SetColor("#99c2ff")
   
 }

  @HostListener('mouseleave') setColorOnMouseLeave(){
      this.SetColor("#4d94ff")
   
 }

 private SetColor(color:String){
     this.element.nativeElement.style.backgroundColor=color;
 }
}
