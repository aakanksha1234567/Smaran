import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicationsRoutingModule } from './medications-routing.module';
import { RecordMedicineComponent } from './record-medicine/record-medicine.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PastMedicineComponent } from './past-medicine/past-medicine.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecordMedicineComponent,
    PastMedicineComponent
  ],
  imports: [
    CommonModule,
    MedicationsRoutingModule,
    ReactiveFormsModule,
     BsDropdownModule.forRoot()
  ]
})
export class MedicationsModule { }
