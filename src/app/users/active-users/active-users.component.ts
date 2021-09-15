import { Component } from '@angular/core'
import { UsersService } from '../users.service'
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {

  constructor(public usersService: UsersService,
              public counterService: CounterService) { }
}
