import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { RecordachievementsComponent } from './recordachievements/recordachievements.component';
import { RecordeventsComponent } from './recordevents/recordevents.component';
import { RecordtasksComponent } from './recordtasks/recordtasks.component';
import { WritenotesComponent } from './writenotes/writenotes.component';
import { PastnotesComponent } from './pastnotes/pastnotes.component';
import { PastachievementsComponent } from './pastachievements/pastachievements.component';


@NgModule({
  declarations: [
    RecordachievementsComponent,
    RecordeventsComponent,
    RecordtasksComponent,
    WritenotesComponent,
    PastnotesComponent,
    PastachievementsComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
