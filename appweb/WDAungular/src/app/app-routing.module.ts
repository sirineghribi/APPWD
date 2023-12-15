import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { BackVoyageComponent } from './back-voyage/back-voyage.component';
import { SigninComponent } from './signin/signin.component';
import { FrontVoyageComponent } from './front-voyage/front-voyage.component';
import { FrontBusComponent } from './front-bus/front-bus.component';
import { FrontStationComponent } from './front-station/front-station.component';


const routes: Routes = [
  {
    path: 'front',
    component: FrontComponent,
    children: [
      {path:'',component:FrontVoyageComponent},
      {path:'bus',component:FrontBusComponent},
      {path:'station',component:FrontStationComponent},
      {path:'**',redirectTo:''}
    ],
  },
  {
    path:'back',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
  },
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'**',
    redirectTo:''
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
