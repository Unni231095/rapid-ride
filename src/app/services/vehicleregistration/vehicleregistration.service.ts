import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class VehicleregistrationService {

  constructor(private http: Http, private apicallService: ApicallService) { }
    registerVehicle(vehicleDetail, successCallback, errorCallback) {
      const apiUrl = 'http://localhost:8080/rapidride1/registration/vehicle';
      this.apicallService.doPostAPIAction(apiUrl, vehicleDetail, response => {
          successCallback(JSON.parse(response._body));
      }, error => {
          errorCallback(error);
      });
  }
}

