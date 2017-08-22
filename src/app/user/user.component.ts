import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newTrustFormVariable: boolean = false;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  public toggleMenu(): void {
    this.newTrustFormVariable = !this.newTrustFormVariable;
  }
  gotoNotification() {
    this.router.navigateByUrl('user/notification');
  }
}
