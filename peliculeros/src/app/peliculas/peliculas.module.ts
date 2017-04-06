import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EditarComponent } from './editar/editar.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  declarations: [ListadoComponent, EditarComponent, PeliculasComponent],
  exports:[PeliculasComponent]
})
export class PeliculasModule { }
