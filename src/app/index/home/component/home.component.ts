import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ipcList: Array<any> = [];
  canvasBox: Array<any> = [];
  preWin: String = '1';
  ngOnInit() {
    this.initIpcList();
    this.preWin = this.initwindow();
    this.initCanvasBox(this.preWin);
  }
  
  initIpcList() {
    for (let i = 0; i < 10; i++) {
      this.ipcList.push({
        ipcName: `shop${i}`,
        channelId: `${i}`
      })
    }
  }
  initwindow(): String {
    var num = sessionStorage.getItem('pre-win'), preWin;
    if (!num) {
      sessionStorage.setItem('pre-win', "1");
      preWin = 1;
    } else {
      preWin = num;
    }
    return preWin;
  }
  initCanvasBox(num) {
    for (let i = 0; i < Number(num); i++) {
      this.canvasBox.push({
        class: num == 1 ? "box1" : "box4",
        id: `canvas${i}`
      })
    }
  }
  changeWin(num): void {
    this.canvasBox = [];
    sessionStorage.setItem('pre-win', num);
    this.preWin = String(num);
    this.initCanvasBox(this.preWin);
  }
  dragstart(e, item) {
    e.dataTransfer.setData('channelId', item.channelId)
  }
  dragend(e) {
    e.preventDefault();
  }
  drop(e) {
    var can_id = e.target.id;
    var ch_id = e.dataTransfer.getData('channelId');
    console.log(can_id, ch_id);
  }
}
