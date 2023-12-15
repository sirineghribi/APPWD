import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus } from '../Entity/Bus';
import { BusService } from '../Service/bus.service';

@Component({
  selector: 'app-modif-bus',
  templateUrl: './modif-bus.component.html',
  styleUrls: ['./modif-bus.component.css']
})
export class ModifBusComponent {
  bus: Bus = new Bus;

  constructor(private busService: BusService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const busId = +params['id']; // Get the ID of the bus from the URL parameters
      if (!isNaN(busId)) {
        this.busService.getListBus().subscribe(
          buses => {
            this.bus = buses.find((b) => b.id === busId) || this.bus;
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.bus && this.bus.id !== undefined) {
      this.busService.updateBus(this.bus.id, this.bus).subscribe(
        (bus) => {
          this.router.navigate(['/back/back-bus']); // Make sure the path is correctly defined in your routing configuration
        },
        (error) => {
          console.error('Error updating bus:', error);
          // Handle error, e.g., display an error message
        }
      );
    } else {
      console.error('Bus ID is undefined');
      // Handle the case where the bus ID is undefined
    }
  }

}
