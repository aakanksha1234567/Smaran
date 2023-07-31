import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReachoutRoutingModule } from './reachout-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ReachoutRoutingModule
  ]
})
export class ReachoutModule { }
