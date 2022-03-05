import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cerrajeria Cuautitlan izcalli';
  constructor( public infopaginaService : InfopaginaService ){


  }
}
