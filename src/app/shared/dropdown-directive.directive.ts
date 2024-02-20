import {
  Directive,
  HostListener,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  className: string = 'show';

  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;

    const menu: any = this.el.nativeElement.querySelector('.dropdown-menu');
    const btn: any = this.el.nativeElement.querySelector('.dropdown-toggle');

    if (this.isOpen) {
      this.renderer.addClass(menu, 'show');
      this.renderer.addClass(btn, 'show');
    } else {
      this.renderer.removeClass(menu, 'show');
      this.renderer.removeClass(btn, 'show');
    }
  }
}
