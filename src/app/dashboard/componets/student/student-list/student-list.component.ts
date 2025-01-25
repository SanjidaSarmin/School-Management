import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/Student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  email: string = 'mail@skooly.com';
  
   constructor(
    private stuService : StudentService
   ){}

   StudentList: Student[] = [];

   ngOnInit(): void {
    this.stuService.getAllData().subscribe((val : any) => {
      this.StudentList = val  
    })
   }

   deleteStudent(id : any){
    this.stuService.deleteById(id).subscribe((val : any) =>{
      console.log("Data deleted");
      this.ngOnInit()
    })
   }

}
