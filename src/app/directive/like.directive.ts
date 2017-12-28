import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appLike]'
})

export class LikeDirective {
  @HostBinding('class.is-like') isLike = true;
}
