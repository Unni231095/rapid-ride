import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poollist',
  templateUrl: './poollist.component.html',
  styleUrls: ['./poollist.component.css']
})
export class PoollistComponent implements OnInit {
  poollist: [{
    id: number,
    drivername: string,
    phonenumber: string
  }];
  constructor(private router: Router ) {
    this.poollist = [{
      id: 100,
      drivername: 'Rahul',
      phonenumber: '9446452521'
    },
    { id: 101,
      drivername: 'Divij',
      phonenumber: '9497278755'
    },
    { id: 102,
      drivername: 'Pradeesh',
      phonenumber: '9544456789'
    }];
   }

  ngOnInit() {
  }
  /*
   * @desc Displaying pool list and applying for request
   * @param {Object} tripId is passed
   * @author Vidhya C
   */
  gotoPoolDetails(id: number) {
    let link= (['/user/pooldetails/', id]);
    this.router.navigate(link);
  }
  gotoFindPool() {
    this.router.navigateByUrl('/user/findpool');
  }
  gotoDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }

}
