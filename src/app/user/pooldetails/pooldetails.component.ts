import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pooldetails',
  templateUrl: './pooldetails.component.html',
  styleUrls: ['./pooldetails.component.css']
})
export class PooldetailsComponent implements OnInit {
  pooldetail: [{
    drivername: string,
    phonenumber: string,
    date: string,
    time: string,
    from: string,
    to: string,
    vehiclename: string,
    vehiclenumber: string,
    numberofseats: number,
  }];
  constructor(private router: Router) {
    this.pooldetail = [{
      drivername: 'Divij',
      phonenumber: '9497278755',
      date: '21/2/2017',
      time: '09:00AM',
      from: 'Kaloor',
      to: 'Kakkanad',
      vehiclename: 'Verna',
      vehiclenumber: 'KL 41 J 9904',
      numberofseats: 3,
    }];
  }

  ngOnInit() {
  }

  gotoDashboard(): void {
    this.router.navigateByUrl('/user/dashboard');
  }

  gotoPoolList(): void {
    this.router.navigateByUrl('/user/poollist');
  }
}
