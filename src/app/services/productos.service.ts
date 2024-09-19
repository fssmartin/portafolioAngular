import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading:boolean=true;

  productos:Producto[]=[];

  constructor( private http:HttpClient) {
    console.log("cargo productos constructor")
    this.getDataProductos();
  }

  getDataProductos(){

    this.loading = true;
    console.log("llamando al servicio para productos");
    this.productos = [];
    // this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
    this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
    .subscribe(
      (data:any) => {   
          this.productos = data;
          this.loading = false;
          console.log(this.productos)
      }
    )  
  }
}
