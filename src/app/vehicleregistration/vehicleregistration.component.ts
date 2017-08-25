import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleregistration',
  templateUrl: './vehicleregistration.component.html',
  styleUrls: ['./vehicleregistration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRegistration(): void {
    this.router.navigateByUrl('registration');
  }

}
