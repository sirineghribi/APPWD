import { Component } from '@angular/core';
import { StationService } from '../Service/station.service';
import { Station } from '../Entity/Station';

@Component({
  selector: 'app-front-station',
  templateUrl: './front-station.component.html',
  styleUrls: ['./front-station.component.css']
})
export class FrontStationComponent {
  stations:Station[]=[]
  constructor(private stationService:StationService){}
  ngOnInit()
  {
      this.stationService.getAllStations().subscribe(l => this.stations=l);
  }

}
