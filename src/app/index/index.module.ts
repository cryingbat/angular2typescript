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
import { SystemComponent, UserComponent } from "./system";
import { IndexRouterModule } from "./index-router.module";
import { SharedModule } from "../shared";
import { TranslateModule } from "@ngx-translate/core";
import { ValidComponent } from './system/component/valid';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    ManagerComponent,
    SystemComponent,
    UserManagerComponent,
    UserComponent,
    ValidComponent,
    LogManagerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IndexRouterModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
  ],
  exports: [TranslateModule],
})
export class IndexModule {
  constructor() {}
}
