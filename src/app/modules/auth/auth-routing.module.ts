import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import {LoginPageComponent} from './componets/login-page/login-page.component';
import {SignUptemsPageComponent} from './componets/login-page/inner-items/sign-uptems-page/sign-uptems-page.component';
import {LoginItemsPageComponent} from './componets/login-page/inner-items/login-items-page/login-items-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login/access', pathMatch: 'full'},
  {path : 'login', component: LoginPageComponent, children: [
      {path: '', redirectTo: '/auth/login/access', pathMatch: 'full'},
      {path: 'register', component: SignUptemsPageComponent},
      {path: 'access', component: LoginItemsPageComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
