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
  styleUrls: ['./horizontal-grid.component.less']
})
export class HorizontalGridComponent implements OnInit {
  
  @Input() tabName: string;
  @Input() thead: [] = [];
  @Input() tbody: [] = [];
  constructor() { }

  ngOnInit() {
  }

}
