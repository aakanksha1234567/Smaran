import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordMedicineComponent } from './record-medicine/record-medicine.component';
import { PastMedicineComponent } from './past-medicine/past-medicine.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Medications'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'record-medicine'
      },
      {
        path: 'record-medicine',
        component: RecordMedicineComponent,
        data: {
          title: 'Record Medicine'
        }
      },
      {
        path: 'past-medicine',
        component: PastMedicineComponent,
        data: {
          title: 'Past Medicine'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicationsRoutingModule { }
