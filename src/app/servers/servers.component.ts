import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {

  allowNewServer = false
  serverCreated = false
  serverCreationStatus = ''
  serverName = 'TestServer'
  servers: string[] = ['TestServer 001', 'TestServer 002']

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
