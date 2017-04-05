import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import {SecurityService} from "./security.service";

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [],
  providers: [SecurityService]
})
export class SecurityModule { }
