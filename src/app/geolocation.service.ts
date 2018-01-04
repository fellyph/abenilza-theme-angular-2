import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
  private iosQuery = 'https://maps.apple.com/?q=';
  private googleQuery = 'https://maps.google.com/?q=';

  constructor() { }

  requestLocation(callback) {
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    );
  }

  getMapLink(location) {
    // Universal Link
    let query = '';
    if (location.latitude) {
      query = `${location.latitude},${location.longitude}`;
    } else {
      query = `${location.address},${location.city}`;
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `${this.iosQuery}${query}`;
    } else {
      return `${this.googleQuery}${query}`;
    }
  }
}
