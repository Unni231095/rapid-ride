import { Injectable } from '@angular/core';
let googleUserDetail: any;
@Injectable()
export class CommonemailService {
  constructor() { }
  setGoogleUserDetail(RequestObj) {
    googleUserDetail = RequestObj;
  }
  getGoogleUserDetail() {
    return googleUserDetail;
  }
}
