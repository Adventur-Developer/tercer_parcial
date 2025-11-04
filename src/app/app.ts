import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ComponenteUnoComponent } from './componentes/componente-uno/componente-uno';
import { ComponenteDos } from './componentes/componente-dos/componente-dos';
import { ComponenteTres } from './componentes/componente-tres/componente-tres';
import { ComponenteCuatro } from './componentes/componente-cuatro/componente-cuatro';
import { ComponenteCinco } from './componentes/componente-cinco/componente-cinco';
import { ComponenteSeis } from './componentes/componente-seis/componente-seis';
import { ComponenteSiete } from './componentes/componente-siete/componente-siete';
import { ComponenteOcho } from './componentes/componente-ocho/componente-ocho';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ComponenteUnoComponent,
    ComponenteDos,
    ComponenteTres,
    ComponenteCuatro,
    ComponenteCinco,
    ComponenteSeis,
    ComponenteSiete,
    ComponenteOcho],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  activeTab: string = 'componente-uno';

  tabs: string[] = ['componente-uno', 'componente-dos', 'componente-tres', 'componente-cuatro', 'componente-cinco', 'componente-seis', 'componente-siete', 'componente-ocho'];

    setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
