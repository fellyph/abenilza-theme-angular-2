import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls:  ['./client.component.css']
})

export class ClientComponent implements OnInit {
  @Input() clientItem;
  @Output() like = new EventEmitter();

  routingSubscription: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  onLike() {
    console.log('liked');
    this.like.emit(this.clientItem);
  }

  ngOnDestroy () {
    this.routingSubscription.unsubiscribe();
  }
}
