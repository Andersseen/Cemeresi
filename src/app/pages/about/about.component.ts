import { Component, OnInit } from '@angular/core';
import {
  bounceInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    bounceInRightOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
