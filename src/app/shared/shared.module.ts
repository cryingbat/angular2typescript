import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  HorizontalGridComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective
} from "./components";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TranslateModule
  ]
})
export class SharedModule {
}
