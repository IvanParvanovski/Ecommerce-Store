import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appHighlightLinkDirective]'
})
export class HighlightLinkDirectiveDirective implements OnInit {
  public href: string = "";

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) { 
    
    this.highlightElement(elementRef.nativeElement);
  }

  ngOnInit(): void {
    this.href = this.router.url;
  }

  highlightElement(el: HTMLElement) {
    this.renderer.addClass(el, 'active');
  }

}
