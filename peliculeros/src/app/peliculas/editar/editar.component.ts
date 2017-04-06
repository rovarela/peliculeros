import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  pelicula:Pelicula;
  peliculaForm:FormGroup;


  ngOnInit() {
    //TODO: crear el form utils
    this.cargarDatosPelicula(1); //TODO: recoger id de pelicula de la ruta
  }

  buildForm() {

    this.peliculaForm = this.formBuilder.group({
      titulo: [this.pelicula.titulo, [Validators.required]],
      descripcion: [this.pelicula, [Validators.required]],
      director: [this.pelicula.director,[Validators.required]],
      anho: [this.pelicula.anho, [Validators.required]]
    });
  }


  cargarDatosPelicula(id):void{
    console.log("Pedir datos de pelicula al servicio"); //TODO: hacer servicio y pedir los datos
    this.pelicula={
      id:1,
      titulo:"titulo 1",
      descripcion:"descripcion 1",
      director:"director 1",
      anho:"1999"
    }
  }

  guardarPelicula({value,valid}):void{
    console.log("Guardar los datos de la pelicula mediante el servicio"); //TODO: hacer servicio y guardar los datos

  }

}
