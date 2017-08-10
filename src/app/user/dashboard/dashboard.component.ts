import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMyPool(){
    this.router.navigateByUrl('user/mypool');
  }

   gotoFindPool(){
    this.router.navigateByUrl('user/findpool');
  }

  gotoCreatePool(){
    this.router.navigateByUrl('user/createpool');
  }

  gotoNotification(){
    this.router.navigateByUrl('user/notification');
  }
}
