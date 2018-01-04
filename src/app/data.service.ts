import { Injectable } from '@angular/core';
import Client from './client/Client';

@Injectable()
export class DataService {

  constructor() { }

  getList (callback) {
    // TOP
    const list = [
      new Client(0, 'Fellyph', 'M', 'corte'),
      new Client(1, 'Abenilza', 'F', 'Escova'),
      new Client(2, 'Lana', 'F', 'tintura')
    ];
    callback(list);
  }

  save (client, callback) {
    // TODO: change real webservice
    callback(true);
  }

  like () {

  }
}
