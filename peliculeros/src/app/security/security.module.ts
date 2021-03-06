import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import {SecurityService} from "./security.service";
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [LoginComponent, SecurityComponent],
  providers: [SecurityService]
})
export class SecurityModule { }
