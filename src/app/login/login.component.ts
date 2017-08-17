import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleSignInComponent } from 'angular-google-signin';
import { GoogleSignInSuccess } from 'angular-google-signin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  public auth2: any;
  /*
  *@desc To initiate Google SignIn
  *@params No parameters passed
  *@author Unnikrishnan M
  */
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1090480001206-65j6qj246c6jupnukeof4mp230maugij.apps.googleusercontent.com'
      });
      this.attachSignin(document.getElementById('googleSigningBtn'));
    });
  }
  /*
  *@desc To authinticate Google User
  *@params Sign In details 
  *@author Unnikrishnan M
  */
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log(googleUser);
        console.log(googleUser.getBasicProfile().ig);
        console.log(googleUser.getBasicProfile().Paa);
        console.log(googleUser.getBasicProfile().U3);
        this.router.navigateByUrl('/user/dashboard');
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.googleInit();
  }
}
