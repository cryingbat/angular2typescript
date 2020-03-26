import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { IndexComponent } from "./index.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home";
import { ManagerComponent } from "./manager";
import { SystemComponent } from "./system";
import { IndexRouterModule } from "./index-router.module";
import { SharedModule } from '../shared';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    ManagerComponent,
    SystemComponent
  ],
  imports: [FormsModule, CommonModule, IndexRouterModule, SharedModule, TranslateModule],
  exports: [TranslateModule]
})
export class IndexModule {
  constructor() {}
}
