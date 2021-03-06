/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

// Array con las rutas de este módulo
const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: '', loadChildren: './home/home.module#HomeModule'}
//   { path: 'movimientos', loadChildren: './movimientos/movimientos.module#MovimientosModule'},
//   { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoModule'}
  // { path: 'contacto', redirectTo: '' },
  /*{
    path: '**', // para casos not-found
    redirectTo: '',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para un módulo raiz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre, el raíz
  ]
})

export class AppRoutingModule { }
