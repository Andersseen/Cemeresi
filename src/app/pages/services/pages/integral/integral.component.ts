import { Component, OnInit } from '@angular/core';
import {
  slideInDownOnEnterAnimation
} from 'angular-animations';


@Component({
  selector: 'app-integral',
  templateUrl: './integral.component.html',
  styleUrls: ['../../services.component.scss'],
  animations: [
    slideInDownOnEnterAnimation({ anchor: 'slide' }),
  ]
})
export class IntegralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
