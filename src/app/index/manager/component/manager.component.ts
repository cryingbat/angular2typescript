import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.less']
})
export class ManagerComponent implements OnInit {

  productId: string = '';
  title: string = ''; 
  constructor(public route:ActivatedRoute) {
    this.route.queryParams.subscribe(queryParams => {
      this.productId = queryParams.productId;
      this.title = queryParams.title;
    });
  }

  ngOnInit() {
  }

}
