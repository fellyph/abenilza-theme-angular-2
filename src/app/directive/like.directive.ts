import {Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLike]'
})

export class LikeDirective {
  @HostBinding('class.is-like') isLike = true;
  @HostBinding('class.is-like-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set appLike(value) {
    this.isLike = value;
  }
}
