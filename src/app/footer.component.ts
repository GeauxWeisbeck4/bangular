import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  template: '<p>Im a {{ dude }}</p>',
  styles: ['p { font-size: 2rem; };']
})
export class FooterComponent {
  @Input() dude: string;
}

