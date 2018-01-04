import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientService } from './client.service';
import Client from './Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  clientItems = [];

  constructor (private clientItemService: ClientService) {}

  ngOnInit() {
    this.clientItemService.get()
          .subscribe(
              data => {
                this.clientItems = data;
                console.log(data);
              },
              err => console.error(err),
          );
  }

  onClientItemLike(clientItem) {
    this.clientItemService.like(clientItem);
  }
}
