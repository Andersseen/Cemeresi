import { Component, OnInit } from '@angular/core';
import {
  slideInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['../../../services.component.scss', 'facial.component.scss'],
  animations: [
    slideInRightOnEnterAnimation({ anchor: 'slide' }),
  ]
})
export class FacialComponent implements OnInit {

  typesOfShoes: string[] = ['LIMPIEZA FACIAL CON MICRODERMOABRASIÓN CON PUNTA DE DIAMANTE', 'TRATAMIENTOS PERSONALIZADOS', 'RADIOFRECUENCIA', 'OXIGENOTERAPIA H2O'];

  isList = true

  constructor() { }

  ngOnInit(): void {
  }

  doSlide() {
    this.isList = !this.isList
  }

}
