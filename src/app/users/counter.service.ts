import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activationUsersCount = 0
  inactivationUsersCount = 0
}
