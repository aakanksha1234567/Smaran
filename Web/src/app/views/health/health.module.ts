import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { RecordappointmentComponent } from './recordappointment/recordappointment.component';
import { RecordmedicalreportComponent } from './recordmedicalreport/recordmedicalreport.component';
import { PastmedicalrecordsComponent } from './pastmedicalrecords/pastmedicalrecords.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PastappointmentrecordsComponent } from './pastappointmentrecords/pastappointmentrecords.component'; 
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    RecordappointmentComponent,
    RecordmedicalreportComponent,
    PastmedicalrecordsComponent,
    PastappointmentrecordsComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class HealthModule { }
