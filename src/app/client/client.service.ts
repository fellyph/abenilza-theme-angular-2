import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import Client from './Client';

@Injectable()
export class ClientService {
  constructor (private http: Http) {}

  get() {
    return this.http.get('http://localhost:8888/abenilza/wp-json/wp/v2/trabalhos')
      .map(response => response.json());
  }

  add(clientItem) {
    console.log(clientItem);
  }

  like (clientItem) {
  }
}
