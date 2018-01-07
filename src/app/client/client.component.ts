import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Client from './Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls:  ['./client.component.css']
})

export class ClientComponent {
  @Input() clientItem;
  @Output() like = new EventEmitter();
  @Output() details = new EventEmitter();
  @Output() share = new EventEmitter();

  routingSubscription: any;

  constructor(private route: ActivatedRoute) {}

  onDetails() {
    this.details.emit(this.clientItem);
  }

  onLike() {
    console.log('liked');
    this.like.emit(this.clientItem);
  }

  onShare() {
    if ('share' in navigator) {
      navigator['share']({
        title: this.clientItem.name,
        text: `I loved this look ${this.clientItem.name}`,
        url: window.location.href
      });
    } else {
      const shareURL = `whatsapp://send?text={this.clientItem.name}`;
      location.href = shareURL;
    }
  }
}
