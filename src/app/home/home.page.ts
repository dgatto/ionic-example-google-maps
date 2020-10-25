import { Component, ViewChild } from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  @ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

  constructor() {}

  testMarker() {
    let center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }
}
