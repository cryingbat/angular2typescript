import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// 引入国际化配置
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
declare var particlesJS: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public translate: TranslateService,public http: HttpClient) {}

  ngOnInit() {
    this._initBg();
  }

  _initBg() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 30,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 8,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
    });
  }
  private setSettion() {
    sessionStorage.setItem("token", "fbdfkjqfrhiu132fdsjanfljng");
  }
  public toIndex() {
    this.http.post('/users/testLogin', {
      userName: 'Administrtor',
      userPwd: "123456x"
    }).subscribe(res=> {
      console.log(res)
    })
    this.setSettion();
    this.router.navigate(["/index"]);
  }

  public toManager() {
    this.setSettion();
    this.router.navigate(["/index/manager"], {
      queryParams: { productId: "1", title: "moon" },
    });
  }

  public toSystem() {
    this.setSettion();
    this.router.navigate(["/index/system"]);
  }
}
