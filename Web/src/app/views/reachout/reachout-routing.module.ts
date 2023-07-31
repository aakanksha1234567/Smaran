import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Feedback'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'feedback'
    },
    {
      path: 'feedback',
      component: FeedbackComponent,
      data: {
        title: 'Feedback'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReachoutRoutingModule { }
