import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import {LoginPageComponent} from './componets/login-page/login-page.component';

const routes: Routes = [
  {
  path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path : 'login', component: LoginPageComponent
  }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
