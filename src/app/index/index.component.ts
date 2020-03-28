import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export interface Lang {
  value: string;
  id: number;
}
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.less"]
})
export class IndexComponent implements OnInit {
  obj: object;

  constructor(public translate: TranslateService) {
    let curLang = this.translate.currentLang;
    this._changeProjectName(curLang)
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
      id: 0
    },
    {
      value: "English",
      id: 1
    }
  ];

  defaultLang = 0;

  langChange(value) {
    let lang: string;
    if (value == 0) {
      this.translate.use("zh");
      lang = 'zh'
    } else {
      this.translate.use("en");
      lang = 'en'
    }
    this._changeProjectName(lang)
  }
}
