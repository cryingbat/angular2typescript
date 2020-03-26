import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: 'appGridItemTitle',
})
export class GridItemTitleDirective {
    constructor(private rd2: Renderer2, private elm: ElementRef) {
    }
    ngOnInit(): void {
        this.rd2.setStyle(this.elm.nativeElement, 'grid-area', 'title');
    }
 }