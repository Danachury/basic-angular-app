import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-odd',
  template: '<p class="odd">Odd {{ value }}</p>',
  styles: ['.odd { color: darkslategrey; font-size: 24px; }']
})
export class OddComponent {

  @Input() value: number

  constructor() { }
}
