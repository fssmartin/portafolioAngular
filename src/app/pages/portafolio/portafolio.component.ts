import { Component } from '@angular/core'; 
import { Producto } from 'src/app/interfaces/product';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

    products:Producto[]=[];

    constructor(public _productosService:ProductosService ){

    


    }


}
