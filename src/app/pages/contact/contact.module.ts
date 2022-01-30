import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import { MaterialModule } from '../../../lib/ui/material.module';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})

export class ContactModule { }
