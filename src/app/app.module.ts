import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/**
 * 主模块路由引入
 */
import { AppRoutingModule } from "./app-routing.module";

/**
 * 主模板引入
 */
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login";
import { PagenotfoundComponent } from "./pagenotfound";

import { IconsProviderModule } from "./icons-provider.module";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/**
 * 共享组件引入
 */
import { IndexModule } from "./index/index.module";
import { SharedModule } from "./shared";

/**
 * http模块请求引入
 */
import {HttpClient, HttpClientModule} from '@angular/common/http'

/**
 * 国际化引入
 */
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// 引入国际化配置
import {TranslateService} from '@ngx-translate/core';
// 注入路由守卫

import {guradeService} from './gurade.service'
@NgModule({
  declarations: [AppComponent, LoginComponent, PagenotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    SharedModule,
    IconsProviderModule,
    FormsModule,
    BrowserAnimationsModule,
    // 国际化配置
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: function(http: HttpClient) {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [guradeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('zh');
    translate.use('zh');
    localStorage.setItem('lang', 'zh');
  }
}
