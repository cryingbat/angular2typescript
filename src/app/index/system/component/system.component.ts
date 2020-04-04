import { Component, OnInit } from "@angular/core";
import { SystemService, SystemInfo } from "../service";

@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.less"],
})
export class SystemComponent implements OnInit {
  constructor(public sysService: SystemService) {}
  sysInfo: SystemInfo[] = [];
  ngOnInit() {
    this.sysService.getSystemInfo().subscribe((res) => {
      this.sysInfo = res;
    });
  }
}
