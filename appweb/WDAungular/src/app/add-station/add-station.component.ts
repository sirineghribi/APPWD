import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Station } from '../Entity/Station';
import { BusService } from '../Service/bus.service';
import { StationService } from '../Service/station.service';
import { VoyageService } from '../Service/voyage.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent {
  station: Station = new Station;
  constructor(private formBuilder: FormBuilder, private voyageService: VoyageService,private router:Router,private bs:BusService,private sts:StationService) { }

  ngOnInit(): void {
  }


  onSubmit() {


      this.sts.addStation(this.station).subscribe(
        (response) => {
          console.log('station created successfully:', response);
          this.router.navigate(['/back/back-station']);
        },
        (error) => {
          console.error('Error creating voyage:', error);
          // Handle error, e.g., display an error message
        }
      );
    } 
  }

