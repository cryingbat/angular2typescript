import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreviewComponent } from './index/preview/preview.component';
import { HistoryComponent } from './index/history/history.component';
import { SystemComponent } from './index/system/system.component';
import { ManagerComponent } from './index/manager/manager.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'index',
    component: IndexComponent,
    children:[{
      path: 'preview',
      component: PreviewComponent
    },{
      path: 'history',
      component: HistoryComponent
    },{
      path: 'manager',
      component: ManagerComponent
    },{
      path: 'system',
      component: SystemComponent
    }]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
