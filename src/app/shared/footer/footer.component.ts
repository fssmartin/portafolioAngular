import { Component } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/infopage';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  data:InfoPagina={};

  constructor(public _infoServicio:InfoPaginaService){

     this.data = _infoServicio.info;

     console.log("info_____",this.data)

  }
}
