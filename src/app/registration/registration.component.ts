import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private userDetail: any;
  private prepopulate: any;
  public gender = [{title: 'Male', value: 'male'}, {title: 'Female', value: 'female'}];

  constructor(private router: Router,
    private registrationService: RegistrationService) { }

    ngOnInit() {
      this.prepopulate = JSON.parse(localStorage.getItem('googleUser'));
      this.userDetail = {
        userName: this.prepopulate.ig,
        emailID: this.prepopulate.U3,
        phoneNumber: '',
        age: '',
        gender: '',
        companyName: '',
        licenseNumber: '',
      };
      console.log(this.prepopulate);
  }

  gotoDashboard(): void {

    this.registrationService.registerUser(this.userDetail, response => {
      if (response.responseCode === 0) {
        alert('Successfully Registered!');
        this.router.navigateByUrl('login');
      } else {
        alert('Error Registering User! Please try after sometime');
        this.router.navigateByUrl('registration');
      }
    }, error => {
      // TODO Show toast message on server errors
    });
  }
}
