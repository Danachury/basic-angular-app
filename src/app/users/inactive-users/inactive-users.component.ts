import { Component } from '@angular/core'
import { UsersService } from '../users.service'
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent {

  constructor(public usersService: UsersService,
              public counterService: CounterService) { }
}
