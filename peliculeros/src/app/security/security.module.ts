import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import {SecurityService} from "./security.service";
import { LoginComponent } from './login/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [SecurityService]
})
export class SecurityModule { }
