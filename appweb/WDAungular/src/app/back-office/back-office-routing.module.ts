import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back/back.component';
import { BackVoyageComponent } from '../back-voyage/back-voyage.component';
import { AddVoyageComponent } from '../add-voyage/add-voyage.component';
import { BackStationComponent } from '../back-station/back-station.component';
import { AddStationComponent } from '../add-station/add-station.component';
import { ModifStationComponent } from '../modif-station/modif-station.component';
import { ModifVoyageComponent } from '../modif-voyage/modif-voyage.component';
import { BackBusComponent } from '../back-bus/back-bus.component';
import { AddBusComponent } from '../add-bus/add-bus.component';
import { ModifBusComponent } from '../modif-bus/modif-bus.component';

const routes: Routes = [
//route par défaut au chargement du module
 {path:"", component:BackComponent,children:[
  {path:"back-voyage",component:BackVoyageComponent},
  {path:"add-voyage",component:AddVoyageComponent},
  {path:"modif-voyage/:id",component:ModifVoyageComponent},
  {path:"back-station",component:BackStationComponent},
  {path:"add-station",component:AddStationComponent},
  {path:"modif-station/:id",component:ModifStationComponent},
  {path:"back-bus",component:BackBusComponent},
  {path:"add-bus",component:AddBusComponent},
  {path:"modif-bus/:id",component:ModifBusComponent},
  {path:"**",redirectTo:"back-bus"}
 ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
