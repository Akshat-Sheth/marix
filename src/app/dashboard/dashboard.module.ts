import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ShareComponent } from './share/share.component';
import { TrackComponent } from './track/track.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    ShareComponent,
    TrackComponent,
    SettingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
