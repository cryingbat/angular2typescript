import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[AppGridItem]',
})
export class GridItemDirective {
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') areas = `'image' 'title'`;
    @HostBinding('style.place-items') items = 'center';
    @HostBinding('style.width') width = '4rem';

    constructor() {
    }
    ngOnInit(): void {
        
    }
 }