import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypool',
  templateUrl: './mypool.component.html',
  styleUrls: ['./mypool.component.css']
})
export class MypoolComponent implements OnInit {
 mypool: [{
   tripid: number,
   duration: string,
   location: string,
   destination: string,
   date: string,
   time: number,
   vehicle: string,
   price: number
  }];
  constructor(private router: Router ) {
    this.mypool = [{
      tripid: 201,
      duration: '45min',
      location: 'kakkanad',
      destination: 'edapally',
      date: '3/8/17',
      time: 9,
      vehicle: 'honda',
      price: 160
  },
  {
      tripid: 202,
      duration: '1hr',
      location: 'chittoor',
      destination: 'Kakkanad',
      date: '4/8/17',
      time: 7,
      vehicle: 'maruti',
      price: 200

  },
  {
      tripid: 203,
      duration: '20min',
      location: 'vazhakala',
      destination: 'pipeline',
      date: '9/7/17',
      time: 12,
      vehicle: 'swift',
      price: 60
    },
    {
       tripid: 204,
      duration: '1hr',
      location: 'Ernakulam',
      destination: 'kaloor',
      date: '3/8/17',
      time: 2,
      vehicle: 'BMW',
      price: 300
    }];
   }

   ngOnInit() {
  }

   remove = function(item) {
    const r = confirm('Are you sure you want to delete?');
    if (r === true) {
      const index = this.mypool.indexOf(item);
      this.mypool.splice(index, 1);
    }
   };
  gotoDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }
}
