import { Component, OnInit } from '@angular/core';
import { Attendance, Student,chartData } from '../model';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  studentList: Array<Student> = []
  attendanceList: Array<Attendance> = []
  date_map = new Map()
  dt: string = ""
  xvalues: Array<string> = []
  yvalues: Array<number> = []
  view: [number,number] = [700, 300];
  sample: Array<chartData>=[];
  final: Array<chartData>=[];


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Students';
  colorScheme = {
    domain: ['#003f5c',
      '#2f4b7c',
     '#665191',
      '#a05195',
      '#d45087',
      '#f95d6a',
      '#ff7c43',
      '#ffa600']
  };



  constructor(private service: StudentService) { }


  ngOnInit(): void 
  {
      this.loadData()
  }
  


  sortDate(a:chartData,b:chartData)
  {                 
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }


  loadData()
  {
    this.service.searchAttendance().subscribe((data) => {
      this.attendanceList = data
      console.log(this.attendanceList);

      this.attendanceList.forEach((data) => {
        this.dt = data.date.toString()
        if(data.present==="Present")
        {
        if (this.date_map.has(this.dt)) 
        {
          this.date_map.set(this.dt, this.date_map.get(this.dt) + 1)
        }
        else
        {
          this.date_map.set(this.dt, 1);
        }
      }
      else
      {
        if(this.date_map.get(this.dt)===undefined)
        this.date_map.set(this.dt, 0);
        else if(this.date_map.has(this.dt))
        this.date_map.set(this.dt, this.date_map.get(this.dt))
      }
      })

      
      
      for (let item of this.date_map.keys())
        this.xvalues.push(item)

      for (let item of this.date_map.values())
        this.yvalues.push(item)


        // console.log(this.xvalues);
        // console.log(this.yvalues);

   
        for (let i=0;i<this.xvalues.length;i++) 
        {  
            // console.log(this.xvalues[i],this.yvalues[i]);
            this.final.push({"name":this.xvalues[i],"value":this.yvalues[i]})
        }
        

        

        // this.final=this.sample;

        this.final.sort(this.sortDate)


    })

  }
 

}

