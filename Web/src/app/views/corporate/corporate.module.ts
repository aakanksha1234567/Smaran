import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { RecordnotesComponent } from './recordnotes/recordnotes.component';
import { RecordmeetingsComponent } from './recordmeetings/recordmeetings.component';
import { RecordachievementsComponent } from './recordachievements/recordachievements.component';
import { PastnotesComponent } from './pastnotes/pastnotes.component';
import { PastachievementsComponent } from './pastachievements/pastachievements.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';


@NgModule({
  declarations: [
    RecordnotesComponent,
    RecordmeetingsComponent,
    RecordachievementsComponent,
    PastnotesComponent,
    PastachievementsComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule,
    FormModule,
    ReactiveFormsModule
  ]
})
export class CorporateModule { }
