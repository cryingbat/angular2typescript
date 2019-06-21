import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './reddit/article/article.component';
//import { HelloWorldComponent } from './study01/hello-world/hello-world.component';
//import { ParentChildComponent } from './study01/parent-child/parent-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
   // HelloWorldComponent,
   // ParentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
