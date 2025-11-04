import { Component } from '@angular/core';
import { VideojuegoService } from '../../servicios/videojuego-service';
import { Juego } from '../../modelos/juego.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-componente-dos',
  imports: [CommonModule],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.css',
})

export class ComponenteDos {
  juegos:Juego[] = [];
constructor(private juegoServicio:VideojuegoService) {}
ngOnInit(): void {
  this.juegoServicio.obtenerJuegos("all").subscribe((juegos) => {
    this.juegos=juegos;
  });
}}
