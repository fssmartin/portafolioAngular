import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path:'',component:PortafolioComponent },
  { path:'home',component:PortafolioComponent },
  { path:'about',component:AboutComponent },
  { path:'item/:id',component:ItemComponent },
  { path:'search/:term',component:SearchComponent },
  { path:'portafolio',component:PortafolioComponent },
  { path:'**', pathMatch:'full', redirectTo:'home' },  
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
