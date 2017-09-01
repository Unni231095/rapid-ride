import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleregistrationService } from '../services/vehicleregistration/vehicleregistration.service';

@Component({
  selector: 'app-vehicleregistration',
  templateUrl: './vehicleregistration.component.html',
  styleUrls: ['./vehicleregistration.component.css'],
})
export class VehicleRegistrationComponent implements OnInit {
  private vehicleDetail: any;
  private something: any;

  constructor(
    private router: Router,
    private vehicleregistrationService: VehicleregistrationService) { }

  ngOnInit() {
     this.vehicleDetail = {
      registrationId: '',
      vehicleName: '',
      vehicleNumber: '',
      capacity: '',
      ac: '',
      manufactureYear: '',
      insuranceNumber: ''
    };
  }

/**
 * @desc Function to Navigate back to registration and createpool table depending on the id
 * @param No parameters passed
 * @author Vidhya C
 */
  gotoScreen(): void {
    this.something = JSON.parse(localStorage.getItem('userDetail'));
    this.vehicleDetail.registrationId = this.something.registrationId;
    this.vehicleregistrationService.registerVehicle(this.vehicleDetail, response => {
        if (response.responseCode === 2) {
            alert('Successfully Registered!');
            this.router.navigateByUrl('user/createpool');
        } else {
            alert('Error Registering Vehicle! Please try after sometime');
            this.router.navigateByUrl('dashboard');
            }
    },  error => {
      // TODO Show toast message on server errors
        });
  }
}
