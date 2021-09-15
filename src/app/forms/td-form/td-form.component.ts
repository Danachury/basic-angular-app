import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.sass']
})
export class TdFormComponent {

  @ViewChild('tdForm') tdForm: NgForm
  subscriptions = ['Pro', 'Advanced', 'Basic']

  onSubmit() {
    console.log(this.tdForm.value)
  }
}
