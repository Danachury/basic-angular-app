import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {

  @Output() gameEvent = new EventEmitter<number>()

  private _value: number = 0
  private _interval: any

  constructor() { }

  onStartGame() {
    this._interval = setInterval(() => this.gameEvent.emit(this._value++), 1000)
  }

  onPauseGame() {
    clearInterval(this._interval)
  }
}
