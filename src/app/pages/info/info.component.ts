import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  myForm = this.fb.group({
    name: ['', Validators.required],

    email: new FormControl('', [Validators.required, Validators.email]),

    check: [false, Validators.required]

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
