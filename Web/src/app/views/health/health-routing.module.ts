import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordappointmentComponent} from './recordappointment/recordappointment.component';
import {RecordmedicalreportComponent} from './recordmedicalreport/recordmedicalreport.component';
import {PastmedicalrecordsComponent} from './pastmedicalrecords/pastmedicalrecords.component'; 
import { PastappointmentrecordsComponent } from './pastappointmentrecords/pastappointmentrecords.component';

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
      path: 'recordappointment/:id',
      component: RecordappointmentComponent,
      data: {
        title: 'Edit Appointment'
      }
    },
    {
      path: 'pastappointmentrecords',
      component:PastappointmentrecordsComponent,
      data: {
        title: 'Past Appointment'
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
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
