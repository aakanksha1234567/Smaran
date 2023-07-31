import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Theme Routing
// import { HealthRoutingModule } from './health-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
  ]
})
export class ThemeModule {
}
