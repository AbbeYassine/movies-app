/**
 * Created by Vyndee on 22/04/2017.
 */
/**
 * Created by Vyndee on 27/03/2017.
 */

import {Injectable} from "@angular/core";
import {Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class GenericService {
  headers: Headers;

  constructor() {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  handleErrors(error: Response) {
    console.log("**** Error *****");
    console.log("status " + error.status);
    console.log("statusText " + error.statusText);
    console.log("url " + error.url);
    console.log("headers " + JSON.stringify(error.headers));
    //console.log(JSON.stringify(response.json()));
    console.log("**** error *****");
    return Observable.throw(error);
  }

}
