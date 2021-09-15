import { Component } from '@angular/core'

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html'
})
export class DirectivesExampleComponent {

  displayDetails = false
  clicksHistory: ClickHistory[] = []

  constructor() { }

  onToggleDisplayDetails() {
    this.displayDetails = !this.displayDetails
    this.clicksHistory.push(
      { displayed: this.displayDetails, at: new Date() }
    )
  }
}

export interface ClickHistory {
  displayed: boolean
  at: Date
}
