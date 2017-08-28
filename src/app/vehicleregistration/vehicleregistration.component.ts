import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vehicleregistration',
  templateUrl: './vehicleregistration.component.html',
  styleUrls: ['./vehicleregistration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
/**
 * @desc Function to Navigate back to registration and createpool table depending on the id
 * @param No parameters passed
 * @author Vidhya C
 */
  gotoScreen(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
    if (this.id === 1) {
      this.router.navigateByUrl('registration');
    } else {
      this.router.navigateByUrl('user/createpool');
    }
  }
}
