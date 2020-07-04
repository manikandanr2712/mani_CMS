import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[colorchange]' })
// Directive class
export class NameColorChange {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
       renderer.setElementStyle(el.nativeElement, 'color', '#f55757');
       renderer.setElementStyle(el.nativeElement, 'font-size', '120%' );
        renderer.setElementStyle(el.nativeElement, 'font-weight', 'bold' );
    }
}