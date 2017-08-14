import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poollist',
  templateUrl: './poollist.component.html',
  styleUrls: ['./poollist.component.css']
})
export class PoollistComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  gotoPoolDetails() {
    this.router.navigateByUrl('/user/pooldetails');
  }
  gotoFindPool() {
    this.router.navigateByUrl('/user/findpool');
  }

}
