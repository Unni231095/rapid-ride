import { Injectable } from '@angular/core';

@Injectable()
export class ApibeautifyService {

  constructor() { }

  beautifyUrl(url, params): string {
    for (let value of params) {
        url = url.replace('{?}', value);
    }
    return url;
}


}
