import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddStudentComponent,
    DashboardComponent,
    EditStudentComponent,
    MarkAttendanceComponent,
    ViewAttendanceComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
