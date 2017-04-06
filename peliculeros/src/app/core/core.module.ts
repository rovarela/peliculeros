import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

import {PeliculasModule} from '../peliculas/peliculas.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    PeliculasModule
  ],
  declarations: [HeaderComponent, ContainerComponent, FooterComponent, MenuComponent],
  exports:[HeaderComponent,ContainerComponent,FooterComponent,MenuComponent]
})
export class CoreModule { }
