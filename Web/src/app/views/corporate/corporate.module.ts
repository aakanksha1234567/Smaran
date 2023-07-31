import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { RecordtasksComponent } from './recordtasks/recordtasks.component';
import { RecordeventsComponent } from './recordevents/recordevents.component';
import { RecordnotesComponent } from './recordnotes/recordnotes.component';
import { RecordmeetingsComponent } from './recordmeetings/recordmeetings.component';
import { RecordachievementsComponent } from './recordachievements/recordachievements.component';
import { PastnotesComponent } from './pastnotes/pastnotes.component';
import { PastachievementsComponent } from './pastachievements/pastachievements.component';


@NgModule({
  declarations: [
    RecordtasksComponent,
    RecordeventsComponent,
    RecordnotesComponent,
    RecordmeetingsComponent,
    RecordachievementsComponent,
    PastnotesComponent,
    PastachievementsComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule
  ]
})
export class CorporateModule { }
