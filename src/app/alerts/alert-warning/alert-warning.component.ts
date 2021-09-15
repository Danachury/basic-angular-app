import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  template: '<span class="alert alert-warning">{{ message }}</span>'
})
export class AlertWarningComponent {

  @Input() message = 'Warning!'
}
