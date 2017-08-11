import { Component, OnInit } from '@angular/core';
import {GoogleSignInComponent} from 'angular-google-signin';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public gapi: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  private myClientId: string = '1090480001206-65j6qj246c6jupnukeof4mp230maugij.apps.googleusercontent.com';
  /*
   * @desc Sign in with google api
   * @param {Object} event return from the google sign in process
   * @author Unnikrishnan M
   */
  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +   profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image:' + profile.getImageUrl());
    this.router.navigateByUrl('user/dashboard');
  }
}
