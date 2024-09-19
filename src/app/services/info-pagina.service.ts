import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/infopage';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  loading:boolean=true;
  info:InfoPagina={};

  productos:any={};

  equipo:any[]=[];

  constructor( private http:HttpClient) {

      this.getDataGlobal();
      this.getDataEquipo(); 
  }
    
  getDataGlobal(){
       
      this.loading = true;


      this.http.get('../../assets/data/db.json')
      .subscribe(
        (data:InfoPagina) => {
            // console.log(data)
            this.info = data;
            this.loading = false;
        }
      )   
  }

  getDataEquipo(){

    this.loading = true;
    // console.log("llamando al servicio");

    this.equipo = []
    this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe(
      (data:any) => {   
          this.equipo = data;
          this.loading = false;
      }
    )  
  }


}
