import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.sass']
})
export class RFormComponent implements OnInit {

  projectForm: FormGroup
  statuses = ['Stable', 'Critical', 'Finished']

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl('', Validators.required, this.forbiddenNamesValidator.bind(this)),
      email: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  forbiddenNamesValidator(control: FormControl): Promise<any> {
    const forbiddenNames = ['test']
    return new Promise((resolve) => {
      setTimeout(() => {
        if (forbiddenNames.includes(control.value.toLowerCase())) {
          resolve({ nameIsForbidden: true })
        } else {
          resolve(null)
        }
      }, 1500)
    })
  }

}
