import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { MaterialModule } from '../../../lib/ui/material.module';
import { IntegralComponent } from './pages/integral/integral.component';
import { FacialComponent } from './pages/integral/facial/facial.component';
import { CorporalComponent } from './pages/integral/corporal/corporal.component';



@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ],
  declarations: [ServicesComponent, IntegralComponent, FacialComponent, CorporalComponent]
})
export class ServicesModule { }

