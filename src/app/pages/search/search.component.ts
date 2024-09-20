import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map, switchMap, tap } from 'rxjs';
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  productos:Producto[] | undefined;
  loading:Boolean=true;
  imgProduct:string | undefined;
  imgProduct2:string | undefined;
  imgProduct3:string | undefined;
  photo:string="";
  search:string="";  
  constructor(private _route:ActivatedRoute,
              private _dataProducts:ProductosService){

    this._route.paramMap
      .pipe(
        tap((data:any)=>{
          this.search = data.params['term'];
          // this.imgProduct = 'assets/img/'+data.params.search+'.jpg'
          // this.imgProduct2 = 'assets/img/'+data.params.search+'/pic-1.jpg'
          // this.imgProduct3 = 'assets/img/'+data.params.search+'/pic-2.jpg'
          // this.photo       = 'assets/img/'+data.params.search+'/main.jpg'
          console.log(this.search)
          setTimeout(() => {
            this.productos = _dataProducts.getSearchProds(this.search);
            console.log(this.productos)
            this.loading=false;
            
          }, 1000);
        }),
             
      )
      .subscribe()
    
  }

  
}
