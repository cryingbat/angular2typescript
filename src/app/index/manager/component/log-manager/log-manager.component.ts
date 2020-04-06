import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-manager',
  templateUrl: './log-manager.component.html',
  styleUrls: ['./log-manager.component.less']
})
export class LogManagerComponent implements OnInit {
  tabName: string = '日志管理表格'
  thead: string[] = ['用户名','用户账户','日志内容', '用户权限', '登陆时间']
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
