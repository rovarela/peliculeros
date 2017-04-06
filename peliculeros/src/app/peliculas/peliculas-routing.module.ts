import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeliculasComponent} from './peliculas/peliculas.component';
import {ListadoComponent} from './listado/listado.component';
import {EditarComponent} from './editar/editar.component';

const routes: Routes = [
  {
    path:"",
    component:PeliculasComponent,
    children:[
      {
        path:"listado",
        component:ListadoComponent
      },
      {
        path:"editar/:id",
        component:EditarComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
