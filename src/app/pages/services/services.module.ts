import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { MaterialModule } from '../../../lib/ui/material.module';
import { FisioterapiaComponent } from './pages/fisioterapia/fisioterapia.component';
import { EsteticaComponent } from './pages/estetica/estetica.component';



@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ],
  declarations: [ServicesComponent, FisioterapiaComponent, EsteticaComponent]
})
export class ServicesModule { }

