import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:Number=new Date().getFullYear();

  constructor(public infopaginaService : InfopaginaService) { }

  ngOnInit(): void {
  }

}
