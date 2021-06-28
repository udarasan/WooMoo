import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './componets/login-page/login-page.component';
import { LoginItemsPageComponent } from './componets/login-page/inner-items/login-items-page/login-items-page.component';
import { SignUptemsPageComponent } from './componets/login-page/inner-items/sign-uptems-page/sign-uptems-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginPageComponent, LoginItemsPageComponent, SignUptemsPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
