import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// 引入国际化配置
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyValidators } from '../shared/valid/valid';
declare var particlesJS: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    public translate: TranslateService,
    public http: HttpClient,
    private fb: FormBuilder
  ) {}
  public signForm: FormGroup;
  submitting: boolean; // 是否可以提交
  ngOnInit() {
    this.submitting = false;
    this._initBg();

    this.initValid();
  }
  initValid() {
    this.signForm = this.fb.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        MyValidators.equalFor('userPwd')
      ])],
      userPwd: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        MyValidators.equalTo('userName')
      ])]
    });

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
    document.cookie = 'sessionId=123fdsf46fasd12356fds4'
    sessionStorage.setItem("token", "fbdfkjqfrhiu132fdsjanfljng");
  }
  public toIndex() {
    this.http
      .post(
        "/users/testLogin",
        {
          userName: "Administrtor",
          userPwd: "123456x",
        },
        {
          "observe": "response",
        }
      )
      .subscribe((res) => {
        console.log(res, res.headers.keys());
      });
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
