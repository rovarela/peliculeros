import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [];
export const routableComponents = [
  LoginComponent,
  SecurityComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SecurityRoutingModule { }
