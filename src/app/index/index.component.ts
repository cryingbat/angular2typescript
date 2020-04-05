import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

export interface Lang {
  value: string;
  id: string;
}
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.less"],
})
export class IndexComponent implements OnInit {
  obj: object;

  constructor(public translate: TranslateService, public router: Router) {
    let curLang = this.translate.currentLang;
    this._changeProjectName(curLang);
  }
  ngOnInit() {}

  private _changeProjectName (lang: string) {
    if (lang === "en") {
      this.obj = {
        name: "dhq"
      };
    } else {
      this.obj = {
        name: "浩琦"
      };
    }
  }

  languages: Lang[] = [
    {
      value: "中文",
      id: "zh",
    },
    {
      value: "English",
      id: "en",
    },
  ];
  exit() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  defaultLang = this._getLangValue(localStorage.getItem("lang") || "zh");
  showLang: boolean = false;
  // 点击展开语言选项
  showLangOption() {
    this.showLang = true;
  }
  // 点击option切换语言
  public selectLang(val) {
    this.defaultLang = this._getLangValue(val);
    if (val == "zh") {
      this.translate.use("zh");
    } else {
      this.translate.use("en");
    }
    this.showLang = false;
    this._changeProjectName(val);
  }
  // 使用id获取对应的val
  _getLangValue(val: string): string {
    let value: string = "";
    this.languages.forEach((item) => {
      if (val == item.id) {
        value = item.value;
      }
    });
    return value;
  }
}
