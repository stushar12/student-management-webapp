import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path:'addstudent',
    component:AddStudentComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'',
    component:NavbarComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'edit-student/:id',
    component:EditStudentComponent
  },
  {
    path:'markAttendance',
    component:MarkAttendanceComponent
  },
  {
    path:'viewAttendance/:id',
    component:ViewAttendanceComponent
  },
  {
    path:'charts',
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
