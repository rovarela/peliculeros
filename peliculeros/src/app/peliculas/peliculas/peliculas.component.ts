import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() { }

  peliculas:Pelicula[]=[];

  ngOnInit() {
    this.peliculas.push({
      id:1,
      titulo:"El Señor de los Anillos",
      descripcion:"Película muy larga",
      director: "Peter Jackson",
      anho:"2000"

    });
    this.peliculas.push({
      id:2,
      titulo:"Pretty Woman",
      descripcion:"Comedia romántica",
      director: "Gary Marshall",
      anho:"1999"

    });
  }

}
