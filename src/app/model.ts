export interface Student 
{
    id?:number,
    studentName: string,
    studentEmail: string,
    phoneNumber: string,
}

export interface Attendance{

    id:number,
    studentId:number
    date:Date,
    present:string
}

export interface chartData
{
    name:string,
    value:number
}