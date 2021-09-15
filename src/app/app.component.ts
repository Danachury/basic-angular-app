import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'basic-angular-app'
  gameControlValue: number

  get isEven(): boolean {
    return this.gameControlValue % 2 == 0
  }

  get isOdd(): boolean {
    return this.isValidValue && !this.isEven
  }

  get isValidValue(): boolean {
    return !!this.gameControlValue
  }
}
