import { Component, OnInit, Input } from '@angular/core';
export interface Channel {
  id: number,
  icon: string,
  title: string,
  link: string
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  
  @Input() cols = 8;
  @Input() disPlayRows = 5;
  sliderMargin = '0';
  constructor() { }

  ngOnInit() {
  }
  
  public get scrollable() : boolean {
    return this.cols > this.disPlayRows;
  }
  
  
  public get templateRows() : string {
    return `minmax(auto, max-content)`
  }


  public get templateColumns() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.disPlayRows * 0.4}rem) / ${this.disPlayRows})`;
  }

  handleScroll(ev) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`;
  }

}
