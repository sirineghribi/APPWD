import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../Entity/Bus';
import { Station } from '../Entity/Station';
import { Voyage } from '../Entity/Voyage';
import { BusService } from '../Service/bus.service';
import { StationService } from '../Service/station.service';
import { VoyageService } from '../Service/voyage.service';

@Component({
  selector: 'app-modif-voyage',
  templateUrl: './modif-voyage.component.html',
  styleUrls: ['./modif-voyage.component.css']
})
export class ModifVoyageComponent {
  buss:Bus[]=[];
  voyage: Voyage = new Voyage;
  stations:Station[]=[];
  constructor(private formBuilder: FormBuilder, private voyageService: VoyageService,private router:Router,private bs:BusService,private sts:StationService,private route:ActivatedRoute) { }
      ngOnInit() {
        this.route.params.subscribe(params => {
          const chambreId = +params['id']; // Récupérer l'ID de la chambre depuis les paramètres de l'URL
          if (!isNaN(chambreId)) {
            this.voyageService.listVoyages().subscribe(
              l => {
                this.bs.getListBus().subscribe((busList) => {
                  this.buss = busList;
            
                  this.sts.getAllStations().subscribe((stationList) => {
                    this.stations = stationList;
                  });
                });
                this.voyage=l.find((stat)=>(stat.id=chambreId))||this.voyage;
              }
            );
          }
        });
      }

      onSubmit() {
        if (this.voyage && this.voyage.id !== undefined) {
          this.voyageService.updateVoyage(this.voyage.id, this.voyage).subscribe(
            (voyage) => {
              this.router.navigate(['/back/back-voyage']); // Assurez-vous que le chemin est correctement défini dans votre configuration de routage
            },
            (error) => {
              console.error('Error updating voyage:', error);
              // Handle error, e.g., display an error message
            }
          );
        } else {
          console.error('voyage ID is undefined');
          // Handle the case where the station ID is undefined
        }
      }

}
