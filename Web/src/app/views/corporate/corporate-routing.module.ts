import { NgModule } from '@angular/core';
import {RecordmeetingsComponent} from './recordmeetings/recordmeetings.component';
import {RecordnotesComponent} from './recordnotes/recordnotes.component';
import {PastnotesComponent} from './pastnotes/pastnotes.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path: '',
  data: {
    title: 'corporate'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'recordtasks'
    },
    
    {
      path: 'recordmeetings',
      component: RecordmeetingsComponent,
      data: {
        title: 'Record Meetings'
      }
    },
    {
      path: 'recordnotes',
      component: RecordnotesComponent,
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
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
