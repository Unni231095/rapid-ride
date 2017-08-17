import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpool',
  templateUrl: './createpool.component.html',
  styleUrls: ['./createpool.component.css']
})
export class CreatepoolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*
    *@desc To route to My Pool Page
    *@author Unnikrishnan M
  */
  gotoMyPool() {
    this.router.navigateByUrl('/user/mypool');
  }
  /*
    *@desc To route to Dashboard Page
    *@author Unnikrishnan M
  */
  gotoDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }
}
