import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { MaterialModule } from '../../../lib/ui/material.module';



@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }

