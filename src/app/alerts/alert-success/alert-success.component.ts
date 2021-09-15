import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  template: '<span class="alert alert-success">{{ message }}</span>'
})
export class AlertSuccessComponent {

  @Input() message = 'Success!'
}
