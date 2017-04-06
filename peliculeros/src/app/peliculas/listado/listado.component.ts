import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../pelicula'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  @Input() peliculas:Pelicula[];

  ngOnInit() {
    
  }

}


