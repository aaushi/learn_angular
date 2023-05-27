import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null,[ Validators.required,this.noSpaceAllowed]),
      password: new FormControl(null, Validators.required),
    });
  }
  login() {
    console.log(this.reactiveForm);
  }
  noSpaceAllowed(control) {
    console.log(control);
    if (control.value != null && control.value.indexOf(' ') !== -1)
      return { noSpaceAllowed: true };
    else return null;
  }
}
