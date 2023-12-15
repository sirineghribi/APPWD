import { Component } from '@angular/core';
import { Bus } from '../Entity/Bus';
import { BusService } from '../Service/bus.service';

@Component({
  selector: 'app-front-bus',
  templateUrl: './front-bus.component.html',
  styleUrls: ['./front-bus.component.css']
})
export class FrontBusComponent {
  constructor(private bs:BusService){}
  buses: Bus[] =[];
  ngOnInit()
  {
    this.bs.getListBus().subscribe(l => this.buses=l);
  }
}
