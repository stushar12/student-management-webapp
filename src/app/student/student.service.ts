import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance, Student } from '../model';

@Injectable({
  providedIn: 'root'
})


export class StudentService {


  studentData:Array<Student>=[]
  attendance:Array<Attendance>=[]
  studentAttendance:Array<Student>=[]

  constructor(private http:HttpClient) { }

  saveStudent(student:Student){
    return this.http.post(`https://615fecc2faa03600179fb77d.mockapi.io/students`,student)
} 

getAllStudents(){
  return this.http.get<Array<Student>>(`https://615fecc2faa03600179fb77d.mockapi.io/students`)
}

getStudentByID(id:any){
  return this.http.get<Student>(`https://615fecc2faa03600179fb77d.mockapi.io/students/${id}`)
}

updateStudentById(studentId:number,studentdata:Student){
  return this.http.put(`https://615fecc2faa03600179fb77d.mockapi.io/students/${studentId}`,studentdata)
}

deleteStudentById(id:number){
  return this.http.delete(`https://615fecc2faa03600179fb77d.mockapi.io/students/${id}`)
}

addAttendance(attendance:Attendance)
  {
    return this.http.post(`https://615fecc2faa03600179fb77d.mockapi.io/attendance`,attendance)
  }
  searchAttendance()
  {
    return this.http.get<Array<Attendance>>(`https://615fecc2faa03600179fb77d.mockapi.io/attendance`)
  }
  
  getAttendanceByID(id:any){
    return this.http.get<Student>(`https://615fecc2faa03600179fb77d.mockapi.io/attendance/${id}`)
  }

  deleteAttendanceById(id:number){
    return this.http.delete(`https://615fecc2faa03600179fb77d.mockapi.io/attendance/${id}`)
  }

}
