import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Budget'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'manage-budget'
      },
      {
        path: 'manage-budget',
        component: ManageBudgetComponent,
        data: {
          title: 'Manage Budget'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBudgetRoutingModule { }

