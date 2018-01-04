import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls:  ['./client.component.css']
})

export class ClientComponent {
  @Input() clientItem;
  @Output() like = new EventEmitter();

  routingSubscription: any;

  constructor(private route: ActivatedRoute) {}

  onLike() {
    console.log('liked');
    this.like.emit(this.clientItem);
  }
}
