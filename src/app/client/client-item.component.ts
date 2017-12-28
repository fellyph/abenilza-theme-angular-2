import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls:  ['./client-item.component.css']
})

export class ClientItemComponent {
  @Input() clientItem;
  @Output() like = new EventEmitter();

  onLike() {
    console.log('liked');
  }
}
