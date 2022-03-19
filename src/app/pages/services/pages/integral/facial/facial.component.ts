import { Component, OnInit } from '@angular/core';
import { FACE } from '../../../../../../lib/global/face-mock';
import { Treatment } from '../../../../../../lib/global/treatment-interface';
import { slideInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['../../../services.component.scss', 'facial.component.scss'],
  animations: [slideInRightOnEnterAnimation({ anchor: 'slide' })],
})
export class FacialComponent implements OnInit {
  treatments = FACE;
  treatment!: Treatment;
  isList = true;

  constructor() {}

  ngOnInit(): void {}

  onSelect(tr: Treatment): void {
    this.treatment = tr;
    this.isList = false;
  }
}
