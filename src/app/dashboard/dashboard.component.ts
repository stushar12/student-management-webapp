import { Component, OnInit } from '@angular/core';
import { Attendance, Student } from '../model';
import {StudentService} from "../../app/student/student.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentList:Array<Student> = []
  studentAttendance:Array<Attendance>=[]
  dates:Array<Date>=[]

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.changeData()
  }
  changeData(){
    this.studentService.getAllStudents().subscribe((data) => {
      this.studentList = data
     })
  }

  deleteStudent(id:any)
  {

    this.studentService.searchAttendance().subscribe((data)=>
    {
      this.studentAttendance=data
      console.log(this.studentAttendance.length)
      }
    )
    

      this.studentService.deleteStudentById(id).subscribe((data) => {
      this.changeData()
    })


} 
     
    
}
