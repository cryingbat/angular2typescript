import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home';
import { ManagerComponent } from './manager';
import { SystemComponent } from './system';


const routes: Routes = [
    {
        path: "index",
        component: IndexComponent,
        children: [
          { path: "", redirectTo: "preview", pathMatch: "full" },
          {
            path: "preview",
            component: HomeComponent
          },
          {
            path: "manager",
            component: ManagerComponent
          },
          {
            path: "system",
            component: SystemComponent
          },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouterModule { }