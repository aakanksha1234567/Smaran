import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordachievementsComponent} from './recordachievements/recordachievements.component';
import {RecordeventsComponent} from './recordevents/recordevents.component';
import {WritenotesComponent} from './writenotes/writenotes.component';
import {RecordtasksComponent} from './recordtasks/recordtasks.component';
import {PastnotesComponent} from './pastnotes/pastnotes.component';
import {PastachievementsComponent} from './pastachievements/pastachievements.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'education'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'recordtasks'
    },
    {
      path: 'recordachievements',
      component: RecordachievementsComponent,
      data: {
        title: 'Record achievements'
      }
    },
    {
      path: 'recordevents',
      component: RecordeventsComponent,
      data: {
        title: 'Record Events'
      }
    },
    {
      path: 'writenotes',
      component: WritenotesComponent,
      data: {
        title: 'Record Notes'
      }
    },
    {
      path: 'pastnotes',
      component: PastnotesComponent,
      data: {
        title: 'Past Notes Record'
      }
    },
    {
      path: 'pastachievements',
      component: PastachievementsComponent,
      data: {
        title: 'Past Achievements'
      }
    },
    {
      path: 'recordtasks',
      component: RecordtasksComponent,
      data: {
        title: 'Record tasks'
      }
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
