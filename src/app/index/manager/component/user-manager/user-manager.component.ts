import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.less']
})
export class UserManagerComponent implements OnInit {

  tabName: string = '用户管理表格'
  thead: string[] = ['用户名','用户账户','用户密码', '用户权限', '登陆时间']
  tbody: object[] = [{
    name: '张三',
    account: "123456",
    password: "123456",
    right: "all",
    time: '2020-04-06 11:23:20' 
  },
  {
    name: '赵六',
    account: "123456",
    password: "123456",
    right: "all",
    time: '2020-04-06 11:23:20' 
  },
  {
    name: '李四',
    account: "123456",
    password: "123456",
    right: "all",
    time: '2020-04-06 11:23:20' 
  },{
    name: '王五',
    account: "123456",
    password: "123456",
    right: "all",
    time: '2020-04-06 11:23:20' 
  }]
  constructor() { }

  ngOnInit() {
  }

}
