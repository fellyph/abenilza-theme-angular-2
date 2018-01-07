import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientService } from './client.service';
import Client from './Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  clientItems = [];

  constructor (private clientItemService: ClientService,
                private router: Router) {}

  ngOnInit() {
    this.clientItemService.getList()
          .subscribe(
              data => {
                this.clientItems = data;
                console.log(data);
              },
              err => console.error(err),
          );
  }

  onClientLike(clientItem) {
    this.clientItemService.like(clientItem);
  }

  onClientDetails(clientItem) {
    this.router.navigate(['/trabalhos', clientItem.id]);
  }
}
