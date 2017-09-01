import { Injectable } from '@angular/core';
import { ApicallService } from '../../utilities/apicall/apicall.service';
import { Http, Response } from '@angular/http';
import { ApibeautifyService } from '../../utilities/apiurl/apibeautify.service';
import { CommonemailService } from '../../services/common/commonemail.service';


@Injectable()
export class LoginService {

  constructor(
    private http: Http,
    private apicallService: ApicallService,
    private apibeautifyService: ApibeautifyService,
    private commonemailService: CommonemailService
  ) { }

  logginginUser(successCallback, errorCallback) {
    let apiUrl = 'http://localhost:8080/rapidride1/registration/getuser?emailID={?}';
    apiUrl = this.apibeautifyService.beautifyUrl(apiUrl, [this.commonemailService.getGoogleUserDetail]);
    this.apicallService.doGetAPIAction(apiUrl, response => {
      successCallback(JSON.parse(response._body));
  }, error => {
      errorCallback(error);
  });

  }

}
