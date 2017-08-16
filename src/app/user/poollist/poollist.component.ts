import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poollist',
  templateUrl: './poollist.component.html',
  styleUrls: ['./poollist.component.css']
})
export class PoollistComponent implements OnInit {
  poollist: [{
    drivername: string,
    phonenumber: string
  }];
  constructor(private router: Router ) {
    this.poollist = [{
      drivername: 'Rahul',
      phonenumber: '9446452521'
    },
    { drivername: 'Divij',
      phonenumber: '9497278755'
    },
    { drivername: 'Pradeesh',
      phonenumber: '9544456789'
    }];
   }

  ngOnInit() {
  }
  gotoPoolDetails() {
    this.router.navigateByUrl('/user/pooldetails');
  }
  gotoFindPool() {
    this.router.navigateByUrl('/user/findpool');
  }
  gotoDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }

}
