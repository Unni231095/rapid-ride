import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApicallService } from '../../utilities/apicall/apicall.service';

@Injectable()
export class CreatepoolService {

  constructor(private http: Http, private apicallService: ApicallService) { }

  createPoolUser(createPoolDetail, successCallback, errorCallback) {
    const apiUrl = 'http://localhost:8080/rapidride1/pool/createpool';
    this.apicallService.doPostAPIAction(apiUrl, createPoolDetail, response => {
        successCallback(JSON.parse(response._body));
    }, error => {
        errorCallback(error);
    });
}

}
