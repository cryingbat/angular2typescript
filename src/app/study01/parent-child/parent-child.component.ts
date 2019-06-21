import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
