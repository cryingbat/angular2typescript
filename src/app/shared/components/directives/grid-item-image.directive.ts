import { Directive, Input, HostBinding, Host, HostListener } from '@angular/core';

@Directive({
    selector: '[AppGridItemImage]',
})
export class GridItemImageDirective { 
    @Input() AppGridItemImage = '3rem';
    @Input() fitMode = 'cover'

    @HostBinding('style.grid-area') area = 'image';
    @HostBinding('style.width') width = this.AppGridItemImage;
    @HostBinding('style.height') height = this.AppGridItemImage;
    @HostBinding('style.object-fit') fit = this.fitMode;

    constructor() {
    }
    ngOnInit(): void {
    }
    @HostListener("click", ['$event.target'])
    handleClick(ev) {
        console.log(ev);
    }

}