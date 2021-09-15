import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent {

  serverId = 10
  serverStatus = 'offline'
  private _color: string

  constructor() {
    setInterval(() =>
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline',
      2000
    )
  }

  get color() {
    this._color = this.serverStatus === 'online' ? 'green' : 'red'
    return this._color
  }

  get isOnline() {
    return this.serverStatus === 'online'
  }

  get isOffline() {
    return this.serverStatus === 'offline'
  }
}
