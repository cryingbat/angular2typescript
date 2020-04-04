import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { HomeComponent } from "./home";
import { ManagerComponent } from "./manager";
import { SystemComponent } from "./system";
import { guradeService } from "../gurade.service";
import { PagenotfoundComponent } from '../pagenotfound';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "manager",
        component: ManagerComponent,
        canActivate: [guradeService],
      },
      {
        path: "system",
        component: SystemComponent,
      },
    ]
  },
  {
    path: "pageError",
    component: PagenotfoundComponent
  },
  {
    path: "**",
    redirectTo: "pageError",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouterModule {}
