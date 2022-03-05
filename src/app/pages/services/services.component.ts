import { Component, OnInit } from '@angular/core';
import {
  bounceInLeftOnEnterAnimation, bounceInDownOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    bounceInLeftOnEnterAnimation({ anchor: 'left' }),
    bounceInDownOnEnterAnimation({ anchor: 'down', delay: 100 }),
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
