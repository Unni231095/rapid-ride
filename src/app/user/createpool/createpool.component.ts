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
}
