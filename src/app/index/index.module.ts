import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { IndexComponent } from "./index.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home";
import {
  ManagerComponent,
  UserManagerComponent,
  LogManagerComponent,
} from "./manager";
import { SystemComponent, UserComponent, LiveValidComponent } from "./system";
import { IndexRouterModule } from "./index-router.module";
import { SharedModule } from "../shared";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { ValidComponent } from './system/component/valid';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProcessPipe } from './process.pipe';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    ManagerComponent,
    ProcessPipe,
    SystemComponent,
    UserManagerComponent,
    UserComponent,
    ValidComponent,
    LiveValidComponent,
    LogManagerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IndexRouterModule,
    ReactiveFormsModule,
    SharedModule,
    // 国际化配置
    TranslateModule.forChild({
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
  exports: [TranslateModule],
})
export class IndexModule {
  constructor() {}
}
