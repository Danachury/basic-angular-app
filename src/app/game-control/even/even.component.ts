import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-even',
  template: '<p class="even">Even {{ value }}</p>',
  styles: ['.even { color: lightskyblue; font-size: 24px; }']
})
export class EvenComponent {

  @Input() value: number

  constructor() { }
}
