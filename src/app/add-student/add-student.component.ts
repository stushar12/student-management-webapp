import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {StudentService} from "../../app/student/student.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit 
{

  studentForm:FormGroup
  constructor(private StudentService:StudentService,private router:Router) 
  {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }



  ngOnInit(): void {
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });


    if(this.studentForm.valid){
      this.StudentService.saveStudent(this.studentForm.value).subscribe(() => {
        this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong"+"\n"+"Please try again.")
      })
      
    } 
  }
 }
