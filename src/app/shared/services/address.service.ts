import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Address} from "../model/address.model";
import {ApiService} from './api.service';

@Injectable()
export class AddressService {

  constructor(private apiService: ApiService) {
	}

    searchAddresses(postalCode: string, houseNumber: number): Observable<Address[]> {
      return this.apiService.searchAddresses(postalCode, houseNumber);
    }
	
}
