import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { Http, Response } from '@angular/http';



@Injectable()
export class RegistrationService {

  constructor(private http: Http, private apicallService: ApicallService) { }

  registerUser(userDetail, successCallback, errorCallback) {
    const apiUrl = 'http://localhost:8080/rapidride1/registration/user';

    this.apicallService.doPostAPIAction(apiUrl, userDetail, response => {
        successCallback(JSON.parse(response._body));
    }, error => {
        errorCallback(error);
    });
}
}
