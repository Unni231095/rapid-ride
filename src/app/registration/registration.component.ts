import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoVehicleRegistration(): void {
    this.router.navigateByUrl('vehicleregistration');
  }
  gotoDashboard(): void {
    this.router.navigateByUrl('user/dashboard');
  }
}
