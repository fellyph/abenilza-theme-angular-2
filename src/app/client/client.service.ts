import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import Client from './Client';

@Injectable()
export class ClientService {
  constructor (private http: Http) {}
  public endpoint = 'http://localhost:8888/abenilza/wp-json/wp/v2/trabalhos';

  getList() {
    return this.http.get(this.endpoint)
      .map(response => response.json());
  }

  get(clientId: string, callback) {
    this.http.get(`${this.endpoint}/${clientId}`)
    .subscribe(response => {
      callback(response.json());
    });
  }

  add(clientItem) {
    console.log(clientItem);
  }

  like (clientItem) {
  }
}
