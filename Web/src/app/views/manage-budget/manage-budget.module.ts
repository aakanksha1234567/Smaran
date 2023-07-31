import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBudgetRoutingModule } from './manage-budget-routing.module';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';


@NgModule({
  declarations: [
    ManageBudgetComponent
  ],
  imports: [
    CommonModule,
    ManageBudgetRoutingModule
  ]
})
export class ManageBudgetModule { }
