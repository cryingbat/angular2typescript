import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './reddit/article/article.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreviewComponent } from './index/preview/preview.component';
import { HistoryComponent } from './index/history/history.component';
import { SystemComponent } from './index/system/system.component';
import { ManagerComponent } from './index/manager/manager.component';
//import { HelloWorldComponent } from './study01/hello-world/hello-world.component';
//import { ParentChildComponent } from './study01/parent-child/parent-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LoginComponent,
    IndexComponent,
    PagenotfoundComponent,
    PreviewComponent,
    HistoryComponent,
    SystemComponent,
    ManagerComponent,
    // HelloWorldComponent,
    // ParentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}