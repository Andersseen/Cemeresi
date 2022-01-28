import { Component, OnInit } from '@angular/core';
import {
  bounceInRightOnEnterAnimation,
  bounceInUpOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation
      ({ anchor: 'enter2', delay: 300 }),
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
