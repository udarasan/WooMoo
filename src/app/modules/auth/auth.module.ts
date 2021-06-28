import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './componets/login-page/login-page.component';
import { LoginItemsPageComponent } from './componets/login-page/inner-items/login-items-page/login-items-page.component';
import { SignUptemsPageComponent } from './componets/login-page/inner-items/sign-uptems-page/sign-uptems-page.component';


@NgModule({
  declarations: [AuthComponent, LoginPageComponent, LoginItemsPageComponent, SignUptemsPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
