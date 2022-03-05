import { Component, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'fade' }),
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
