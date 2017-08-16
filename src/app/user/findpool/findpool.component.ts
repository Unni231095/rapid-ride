import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findpool',
  templateUrl: './findpool.component.html',
  styleUrls: ['./findpool.component.css']
})
export class FindpoolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*
   * @desc Entering details about required pool
   * @param no parameters are passed
   * @author Vidhya C
   */
  gotoPoolList() {
    this.router.navigateByUrl('/user/poollist');
  }
  gotoDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }
}
