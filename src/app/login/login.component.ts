import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// 引入国际化配置
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, public translate: TranslateService) { }

  ngOnInit() {
    
  }

  public toIndex() {
    sessionStorage.setItem('token', 'fbdfkjqfrhiu132fdsjanfljng');
    this.router.navigate(["/index"]);
  }
  
}
