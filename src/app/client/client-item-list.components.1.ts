import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientItemService } from './client-item.service';

@Component({
  selector: 'app-client-item-list',
  templateUrl: './client-item-list.component.html',
  styleUrls: ['./client-item-list.component.css']
})

export class ClientItemListComponent {
  clientItems;
  medium = '';
  paramsSubscription;

  constructor (private clientItemService: ClientItemService) {}

  ngOnInit() {
   console.log(this.clientItemService.get());
  }

  onClientItemLike(clientItem) {
    this.clientItemService.like(clientItem);
  }
}