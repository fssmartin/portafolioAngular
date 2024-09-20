import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAll, Producto } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading:boolean=true;

  productos:Producto[]=[]; 

  constructor( private http:HttpClient) {
    console.log("cargo productos constructor")
    this.getDataProds(); 
  }

  getDataProds(){

    this.loading = true;
    console.log("llamando al servicio para getDataProds");
    this.productos = [];
    // this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
    this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
    .subscribe(
      (data:any) => {   
          this.productos = data;
          console.log(this.productos)
          setTimeout(() => {
            this.loading = false;            
          }, 2000);
      }
    )  
  }
  
  getDataAllProd(idProd:string):Observable<ProductAll>{
 
    console.log("llamando al servicio para getDataAllProds");
 
    return this.http.get('https://portafolio-665c0-default-rtdb.europe-west1.firebasedatabase.app/productoos/'+idProd+'.json') 
      
  }

  getSearchProds(search:string):Producto[]{

      console.log(this.productos)
      console.log(search)
      let miarray:Producto[]=[];
      this.productos.forEach(
        (prod:any)=>{
           

              let cat = prod.categoria.toLowerCase() 
              let tit = prod.titulo.toLowerCase()

              if( cat.indexOf(search.toLowerCase(), 0) >= 0 || tit.indexOf(search.toLowerCase(), 0) >=0  ){
                miarray.push(prod)
              }
          }
      )

      return miarray;

    //   return this.productos?.filter( ( prod:Producto) => {
        
    //     let pepe = prod.categoria?.indexOf(search, 0)   
    //     let pepa = prod.titulo?.indexOf(search, 0)  
    //  console.log(pepe , pepa)
    //     if(pepe || -111 >= 0  || pepa || -111 >= 0) 
    //         return prod
   
    //     return false
    //   });
    }
}
