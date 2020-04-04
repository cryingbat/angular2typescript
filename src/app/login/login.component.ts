import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// 引入国际化配置
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, public translate: TranslateService) { }

  ngOnInit() {
    
  }
 private setSettion() {
  sessionStorage.setItem('token', 'fbdfkjqfrhiu132fdsjanfljng');
 }
  public toIndex() {
    this.setSettion();
    this.router.navigate(["/index"]);
  }
  
  public toManager() {
    this.setSettion();
    this.router.navigate(["/index/manager"],{queryParams: {productId: '1',title: 'moon'}});
  }

  public toSystem() {
    this.setSettion();
    this.router.navigate(["/index/system"]);
  }
  
}
