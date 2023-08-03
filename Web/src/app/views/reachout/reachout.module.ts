import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReachoutRoutingModule } from './reachout-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ReachoutRoutingModule,
    FormModule,
    ReactiveFormsModule
  ]
})
export class ReachoutModule { }
