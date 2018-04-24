import { Component } from '@angular/core';
import { AddressService } from './shared/services/address.service';
import { Address } from './shared/model/address.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { } from '@types/googlemaps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  postalCode: string = '';
  houseNumber: string = '';
  //addresses: Observable<Address[]>;
  address: Address;
  map: google.maps.Map;
  addressSearched: boolean = false;

  constructor(private addressService: AddressService) {

  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
    
  }

  // button search
  btnSearch() {
    this.initMap();
    this.addressService.searchAddresses(this.postalCode, parseInt(this.houseNumber)).subscribe(res => {
      if (res != null) {
        this.address = res[0];
        this.setCenter(parseFloat(res[0].lat), parseFloat(res[0].lon));
      }
      else {
        this.address = null;
      }
      this.addressSearched = true;
    });
  }
  
  // button empty
  btnEmpty() {
    this.postalCode = '';
    this.houseNumber = '';
    this.address = null;
    this.map = null;
    this.addressSearched = false;
  }

  // initMap
  initMap() {
    var uluru = { lat: 52.238976, lng: 6.840913 };
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
  }
  
  // set center
  setCenter(latitude: number, longitude: number) {
    this.map.setCenter(new google.maps.LatLng(latitude, longitude));

    let location = new google.maps.LatLng(latitude, longitude);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }

}

