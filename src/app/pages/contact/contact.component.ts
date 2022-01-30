import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators, FormControl } from '@angular/forms';

import {
  bounceInRightOnEnterAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInUpOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    bounceInLeftOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 300 }),
  ]
})
export class ContactComponent {
  myForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: new FormControl('', [Validators.required, Validators.email]),
    message: ['', Validators.required],
    check: [false, Validators.required]

  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert(this.myForm.value.message);
  }

}
