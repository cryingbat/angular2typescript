import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Lang {
  value: string,
  id: number
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(public translate: TranslateService) {

  }
  ngOnInit() {
  }

  languages: Lang[] = [{
    value: "中文",
    id: 0 
  },{
    value: "English",
    id: 1
  }];

  defaultLang = 0;
  
  langChange(value) {
    console.log(value)
    if(value == 0){
      this.translate.use('zh')
    }else{
      this.translate.use('en')
    }
  }
}
