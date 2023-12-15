import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from '../Entity/Bus';
import { BusService } from '../Service/bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {
  bus: Bus = new Bus;

  constructor(private formBuilder: FormBuilder, private busService: BusService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.busService.createBus(this.bus).subscribe(
      (response) => {
        console.log('Bus created successfully:', response);
        this.router.navigate(['/back/back-bus']);
      },
      (error) => {
        console.error('Error creating bus:', error);
        // Handle error, e.g., display an error message
      }
    );
  }

}
