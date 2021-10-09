import { Component, OnInit } from '@angular/core';
import { Attendance } from '../model';
import {StudentService} from "../../app/student/student.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
 
 
  attendance:Array<Attendance>=[]
  attendanceId:Array<Attendance>=[]
  id:number=0;

  constructor(private activeRouter:ActivatedRoute,private studentService:StudentService) 
  {

  }

  ngOnInit(): void 
  {
    this.activeRouter.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.studentService.searchAttendance().subscribe((data)=>
    {
      this.attendance=data
      for(let i=0;i<this.attendance.length;i++)
    {
      if(this.attendance[i].studentId===this.id)
      {
        this.attendanceId.push(this.attendance[i])
      }
    }
    })
    })


    
  }

  

}