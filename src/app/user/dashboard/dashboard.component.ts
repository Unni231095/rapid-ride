import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxSiemaOptions } from 'ngx-siema';
import { NgxSiemaService } from 'ngx-siema';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: NgxSiemaOptions = {
    selector: '.siema',
  };

  constructor(private router: Router, private ngxSiemaService: NgxSiemaService) { }

  ngOnInit() {
  }
  /*
  * @desc Main page of CarPooling system
  * @param no parameters are passed
  * @author Unnikrishnan M
  */
  gotoMyPool() {
    this.router.navigateByUrl('user/mypool');
  }

  gotoFindPool() {
    this.router.navigateByUrl('user/findpool');
  }

  gotoCreatePool() {
    this.router.navigateByUrl('user/createpool');
  }

  gotoNotification() {
    this.router.navigateByUrl('user/notification');
  }
}
