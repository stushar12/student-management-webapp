import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student/student.service';
import { Attendance, Student } from '../model';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  attendance:Array<Student>=[]
  studentForm:FormGroup
  
  constructor(private service:StudentService,private router:Router) { 
    this.studentForm = new FormGroup({
      'studentId': new FormControl('', Validators.required),
      'date': new FormControl('', [Validators.required]),
      'present': new FormControl('', [Validators.required]),
     
    })
 
  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((data) => {
      this.attendance = data
      this.service.studentAttendance=this.attendance
     })
  }
 submitAttendance()
 {
 if(this.studentForm.valid){
    this.service.addAttendance(this.studentForm.value).subscribe(() => {
      this.router.navigate(['/dashboard'])
    },() => {
      alert("Something Went Wrong")
    })
    
  }
 
 }
}