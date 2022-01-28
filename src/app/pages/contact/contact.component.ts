import { Component, OnInit } from '@angular/core';

import {
  bounceInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    bounceInRightOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter3', delay: 300 }),
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
