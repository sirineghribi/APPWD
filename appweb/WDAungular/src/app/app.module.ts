import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front/front.component';
import  {BackOfficeModule} from './back-office/back-office.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackVoyageComponent } from './back-voyage/back-voyage.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackStationComponent } from './back-station/back-station.component';
import { AddStationComponent } from './add-station/add-station.component';
import { ModifStationComponent } from './modif-station/modif-station.component';
import { ModifVoyageComponent } from './modif-voyage/modif-voyage.component';
import { BackBusComponent } from './back-bus/back-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ModifBusComponent } from './modif-bus/modif-bus.component';
import { SigninComponent } from './signin/signin.component';
import { FrontBusComponent } from './front-bus/front-bus.component';
import { FrontStationComponent } from './front-station/front-station.component';
import { FrontVoyageComponent } from './front-voyage/front-voyage.component';
import { FrontReservationComponent } from './front-reservation/front-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BackVoyageComponent,
    AddVoyageComponent,
    BackStationComponent,
    AddStationComponent,
    ModifStationComponent,
    ModifVoyageComponent,
    BackBusComponent,
    AddBusComponent,
    ModifBusComponent,
    SigninComponent,
    FrontBusComponent,
    FrontStationComponent,
    FrontVoyageComponent,
    FrontReservationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



  
}
