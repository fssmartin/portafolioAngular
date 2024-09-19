import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/infopage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  data:InfoPagina={};

  constructor(public _infoPagina:InfoPaginaService){

  }

}
