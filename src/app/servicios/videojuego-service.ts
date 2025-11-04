import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../modelos/juego.model';

@Injectable({
  providedIn: 'root',
})
export class VideojuegoService {
  private url = 'https://www.freetogame.com/api/';
  constructor(private http: HttpClient) {}
  obtenerJuegos(dispositivo:string):Observable<Juego[]> {
    //https://www.freetogame.com/api/games?platform=pc
    return this.http.get<Juego[]>(this.url + 'games?platform='+dispositivo);

  }
}