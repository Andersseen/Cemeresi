import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  bounceInLeftOnEnterAnimation, bounceInDownOnEnterAnimation
} from 'angular-animations';
import { slideInAnimation } from '../../../lib/ui/route-animation'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    bounceInLeftOnEnterAnimation({ anchor: 'left' }),
    bounceInDownOnEnterAnimation({ anchor: 'down', delay: 100 }),
    slideInAnimation
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
