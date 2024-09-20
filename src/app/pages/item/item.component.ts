import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map, switchMap, tap } from 'rxjs';
import { ProductAll } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  product:ProductAll | undefined;
  loading:Boolean=true;
  imgProduct:string | undefined;
  imgProduct2:string | undefined;
  imgProduct3:string | undefined;
  photo:string="";
  constructor(private _route:ActivatedRoute,
              private _dataProducts:ProductosService){


    this._route.paramMap
      .pipe(
        tap((data:any)=>{
          // this.imgProduct = 'assets/img/'+data.params.id+'.jpg'
          // this.imgProduct2 = 'assets/img/'+data.params.id+'/pic-1.jpg'
          // this.imgProduct3 = 'assets/img/'+data.params.id+'/pic-2.jpg'
          // this.photo       = 'assets/img/'+data.params.id+'/main.jpg'
          let url = 'https://raw.githubusercontent.com/fssmartin/portafolioAngular/refs/heads/main/docs/assets/img/'
          this.imgProduct = url+data.params.id+'.jpg'
          this.imgProduct2 = url+data.params.id+'/pic-1.jpg'
          this.imgProduct3 = url+data.params.id+'/pic-2.jpg'
          this.photo       = url+data.params.id+'/main.jpg'
          
        }),
        switchMap(
          (data:any)=> _dataProducts.getDataAllProd(data.params.id)
        ),
        delay(1000),  
        map(
          (data:ProductAll) =>{
             
            console.log(data)
            this.product = data;
            this.loading=false;
          }
        ),
      )
      .subscribe()
    
  }

}
