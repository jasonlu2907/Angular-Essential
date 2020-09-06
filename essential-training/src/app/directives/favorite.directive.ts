import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  // Attribute directive custom
  @HostBinding('class.is-favorite') isFavorite = true;

  // Working with events in directive
  @HostBinding('class.is-favorite-hovering') hovering = true;
  /**Angular working with native events without the ON prefix -> mouseenter NOT onmouseenter */
  @HostListener('mouseenter') mouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.hovering = false;
  }

  // Using directive values
  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }
  constructor() { }

}
