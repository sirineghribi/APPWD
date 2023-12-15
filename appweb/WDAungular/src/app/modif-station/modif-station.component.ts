import { Component } from '@angular/core';
import { StationService } from '../Service/station.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../Entity/Station';

@Component({
  selector: 'app-modif-station',
  templateUrl: './modif-station.component.html',
  styleUrls: ['./modif-station.component.css']
})
export class ModifStationComponent {

      station: Station = new Station;
      constructor(private stationservice:StationService,private router:Router,private route:ActivatedRoute){}
      ngOnInit() {
        this.route.params.subscribe(params => {
          const chambreId = +params['id']; // Récupérer l'ID de la chambre depuis les paramètres de l'URL
          if (!isNaN(chambreId)) {
            this.stationservice.getAllStations().subscribe(
              l => {
                this.station=l.find((stat)=>(stat.idstation=chambreId))||this.station;
              }
            );
          }
        });
      }

      onSubmit() {
        if (this.station && this.station.idstation !== undefined) {
          this.stationservice.updateStation(this.station.idstation, this.station).subscribe(
            (station) => {
              this.router.navigate(['/back/back-station']); // Assurez-vous que le chemin est correctement défini dans votre configuration de routage
            },
            (error) => {
              console.error('Error updating station:', error);
              // Handle error, e.g., display an error message
            }
          );
        } else {
          console.error('Station ID is undefined');
          // Handle the case where the station ID is undefined
        }
      }
}
