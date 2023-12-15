import { Component, Input } from '@angular/core';
import { Reservation } from '../Entity/Reservation';
import { VoyageService } from '../Service/voyage.service';
import { Voyage } from '../Entity/Voyage';

@Component({
  selector: 'app-front-reservation',
  templateUrl: './front-reservation.component.html',
  styleUrls: ['./front-reservation.component.css']
})
export class FrontReservationComponent {
  @Input()
  reservations:Reservation[]=[];
  voyages: Voyage[] = [];

  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.voyageService.listVoyages().subscribe(voyages => {
      this.voyages = voyages;
    });
  }

  getVoyage(reservation: Reservation): Voyage | undefined {
    return this.voyages.find(voyage => voyage.id === reservation.voyage);
  }

}
