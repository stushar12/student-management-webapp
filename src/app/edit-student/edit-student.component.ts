import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:number=0;
  studentForm:FormGroup;


  constructor(private activeRouter:ActivatedRoute, private service:StudentService,private router:Router) {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })
   }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.service.getStudentByID(paramsData.id).subscribe((data) => {
       delete data.id
        this.studentForm.patchValue(data)
      })
    })

  }
  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) 
      {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      this.service.updateStudentById(this.id,this.studentForm.value).subscribe(() => {
        this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong"+"\n"+"Please try again.")
      })
      
    }
  }
}