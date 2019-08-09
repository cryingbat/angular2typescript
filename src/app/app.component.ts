import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lang: string = "zh";
  constructor(private translate: TranslateService) {
    //添加语言支持
    this.translate.addLangs(["en", "zh"]);

    //获取当前浏览器环境的语言比如en、 zh
    let browserLang = translate.getBrowserLang();
    // console.log(browserLang)
    // translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
    //设置默认语言，一般在无法匹配的时候使用
    this.translate.setDefaultLang('zh');

  }
  //切换语言
  changeLang(lang) {
    this.translate.use(lang);
  }
}
