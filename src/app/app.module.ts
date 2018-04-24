import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import services
import { AddressService } from "./shared/services/address.service";
import { ApiService } from './shared/services/api.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, NgbModule.forRoot()],
  providers: [AddressService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
