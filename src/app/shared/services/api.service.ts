import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Address} from '../model/address.model';

// RxJS operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

	constructor(private http: Http) {
	}

    // get address by postalcode and house number
    public searchAddresses(postalCode: string, houseNumber: number): Observable<Address[]> {

      let url = environment.apiUrl + '&postcode=' + postalCode + '&streetnumber=' + houseNumber;
      return this.http.get(url)
        .map(response => {
          console.log(response);
          const allDetails = response.json().details;
          if (allDetails != undefined) {
            return allDetails.map((detail: Address) => {
              return new Address(detail.street,
                detail.city,
                detail.municipality,
                detail.province,
                detail.postcode,
                detail.pnum,
                detail.pchar,
                detail.rd_x,
                detail.rd_y,
                detail.lat,
                detail.lon)
            })
          }
          else {
            return null;
          }
        })
        .catch((errors: any): any => {
          debugger;
          console.log(errors);
          this.handleError(errors);
        })
    }




	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}

}

