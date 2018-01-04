import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientItemService {
  constructor (private http: Http) {}

  get() {
    return this.http.get('http://localhost:8888/abenilza/wp-json/wp/v2/trabalhos')
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }

  add(clientItem) {
    console.log(clientItem);
  }

  like (clientItem) {
  }
}

/*
getBooks() 
{
  this.isbnsource.getBooks(this.isbn).subscribe(
    data => { this.foundBooks = data.json();
this.foundBooks = Array.of(this.foundBooks); 
     },
    err => console.error(err), 
    () => console.log('getBooks completed') 
    );
}
*/