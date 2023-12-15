import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';



@NgModule({
  declarations: [BackComponent ,
  ],
  
  imports: [
    CommonModule,

    BackOfficeRoutingModule
  ]

  
})
export class BackOfficeModule { }
