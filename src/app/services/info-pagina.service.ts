import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/infopage';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  loading:boolean=true;
  info:InfoPagina={};

  constructor( private http:HttpClient) {

      this.getDataGlobal();
      
  }
    
  getDataGlobal(){
       
      this.loading = true;
      console.log("llamando al servicio");

      this.http.get('../../assets/data/db.json')
      .subscribe(
        (data:InfoPagina) => {
            console.log(data)
            this.info = data;
            this.loading = false;
        }
      )
   
  }
}
