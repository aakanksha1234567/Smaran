import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { RecordappointmentComponent } from './recordappointment/recordappointment.component';
import { RecordmedicalreportComponent } from './recordmedicalreport/recordmedicalreport.component';
import { PastmedicalrecordsComponent } from './pastmedicalrecords/pastmedicalrecords.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecordappointmentComponent,
    RecordmedicalreportComponent,
    PastmedicalrecordsComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    ReactiveFormsModule
  ]
})
export class HealthModule { }
