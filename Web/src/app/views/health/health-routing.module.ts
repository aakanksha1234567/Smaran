import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordappointmentComponent} from './recordappointment/recordappointment.component';
import {RecordhealthstateComponent} from './recordhealthstate/recordhealthstate.component';
import {RecordmedicalreportComponent} from './recordmedicalreport/recordmedicalreport.component';
import {RecordvaccineComponent} from './recordvaccine/recordvaccine.component';
import {PastmedicalrecordsComponent} from './pastmedicalrecords/pastmedicalrecords.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'health'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'recordappointment'
    },
    {
      path: 'recordappointment',
      component: RecordappointmentComponent,
      data: {
        title: 'Record Appointment'
      }
    },
    {
      path: 'recordmedicalreport',
      component:RecordmedicalreportComponent,
      data: {
        title: 'Record Medical Report'
      }
    },
    {
      path: 'pastmedicalrecords',
      component:PastmedicalrecordsComponent,
      data: {
        title: 'Past Medical Report'
      }
    },
    {
      path: 'recordvaccine',
      component:RecordvaccineComponent,
      data: {
        title: 'Record Vaccine'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
