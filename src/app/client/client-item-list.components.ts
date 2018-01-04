import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientItemService } from './client-item.service';

@Component({
  selector: 'app-client-item-list',
  templateUrl: './client-item-list.component.html',
  styleUrls: ['./client-item-list.component.css']
})

export class ClientItemListComponent {
  clientItems = [];

  constructor (private clientItemService: ClientItemService) {}

  ngOnInit() {
    this.clientItemService.get()
          .subscribe(
              data => {
                this.clientItems = data;
              },
              err => console.error(err),
              () => console.log('getClients completed')
          );
  }

  onClientItemLike(clientItem) {
    this.clientItemService.like(clientItem);
  }
}
