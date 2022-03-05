import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/info-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info:InfoPagina={};
  cargada=false;


  constructor( private http: HttpClient) {

   this.http.get('https://isra-9222c-default-rtdb.firebaseio.com/InfoIsra.json')
   .subscribe( (resp:InfoPagina) => {
    this.cargada = true;
    this.info = resp;
   });



  }

}
