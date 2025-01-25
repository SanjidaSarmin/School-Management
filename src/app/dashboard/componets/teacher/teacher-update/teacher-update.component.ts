import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent {
  students = [
    { rollNo: '001', name: 'Abir Hossain', email: 'abir.hossain@example.com', class: 'Class 5', status: 'Active' },
    { rollNo: '002', name: 'Ayesha Rahman', email: 'ayesha.rahman@example.com', class: 'Class 8', status: 'Active' },
    { rollNo: '003', name: 'Saiful Islam', email: 'saiful.islam@example.com', class: 'Class 10', status: 'Inactive' },
    // Add the rest of your student data here...
  ];

  updateAttendance(student: any) {
    // Handle attendance save logic here
    console.log(`Attendance for ${student.name} updated to ${student.status}`);
  }
}