import { Component, OnInit } from '@angular/core';
import { BODY } from '../../../../../../lib/global/body-mock';
import { Treatment } from '../../../../../../lib/global/treatment-interface';
import {
  slideInUpOnEnterAnimation,
  slideInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-corporal',
  templateUrl: './corporal.component.html',
  styleUrls: ['../../../services.component.scss', './corporal.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({ anchor: 'up' }),
    slideInRightOnEnterAnimation({ anchor: 'right' }),
  ],
})
export class CorporalComponent implements OnInit {
  treatments = BODY;
  treatment!: Treatment;
  isList = true;

  constructor() {}

  ngOnInit(): void {}

  onSelect(tr: Treatment): void {
    this.treatment = tr;
    this.isList = false;
  }
}
