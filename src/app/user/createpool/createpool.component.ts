import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreatepoolService } from '../../services/createpool/createpool.service';

@Component({
  selector: 'app-createpool',
  templateUrl: './createpool.component.html',
  styleUrls: ['./createpool.component.css']
})
export class CreatepoolComponent implements OnInit {
  private createPoolDetail: any;
  private something: any;

  constructor(private router: Router, private createpoolService: CreatepoolService) { }

  ngOnInit() {
    this.createPoolDetail = {
      registrationId: '',
      location: '',
      destination: '',
      date: '',
      time: '',
    };
  }

  gotoVehicleRegistration(): void {
    let link = ['vehicleregistration'];
    this.router.navigate(link);
  }



  gotoMyPool(): void {
    this.something = JSON.parse(localStorage.getItem('userDetail'));
    this.createPoolDetail.registrationId = this.something.registrationId;
    this.createpoolService.createPoolUser(this.createPoolDetail, response => {
      if (response.responseCode === 6) {
        alert('Pool Successfully created!');
        this.router.navigateByUrl('user/mypool');
      } else {
        alert('Error Registering User! Please try after sometime');
        this.router.navigateByUrl('user/createpool');
      }
    }, error => {
      // TODO Show toast message on server errors
    });
  }
}
