import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voyage } from '../Entity/Voyage';
import { VoyageService } from '../Service/voyage.service';
import { Router } from '@angular/router';
import { BusService } from '../Service/bus.service';
import { Bus } from '../Entity/Bus';
import { StationService } from '../Service/station.service';
import { Station } from '../Entity/Station';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent {
  buss:Bus[]=[];
  voyage: Voyage = new Voyage;
  stations:Station[]=[];
  constructor(private formBuilder: FormBuilder, private voyageService: VoyageService,private router:Router,private bs:BusService,private sts:StationService) { }

  ngOnInit(): void {
    this.bs.getListBus().subscribe((busList) => {
      this.buss = busList;

      this.sts.getAllStations().subscribe((stationList) => {
        this.stations = stationList;
      });
    });
  }


  onSubmit() {


      this.voyageService.createVoyage(this.voyage).subscribe(
        (response) => {
          console.log('Voyage created successfully:', response);
          this.router.navigate(['/back/back-voyage']);
        },
        (error) => {
          console.error('Error creating voyage:', error);
          // Handle error, e.g., display an error message
        }
      );
    } 
  }

