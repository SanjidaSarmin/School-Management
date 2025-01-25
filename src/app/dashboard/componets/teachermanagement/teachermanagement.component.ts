import { Component } from '@angular/core';

@Component({
  selector: 'app-teachermanagement',
  templateUrl: './teachermanagement.component.html',
  styleUrls: ['./teachermanagement.component.scss']
})
export class TeachermanagementComponent {
  mail: string = 'mail@skooly.com';
  teachers = [
    { employeeId: 'T001', name: 'Jamal ', email: 'jamal.1@example.com', department: 'Mathematics', status: 'Active' },
    { employeeId: 'T002', name: 'Mizan Sheikh', email: 'mizan.shahed@example.com', department: 'Science', status: 'Inactive' },
    { employeeId: 'T003', name: 'Abdul Karim', email: 'abdul.karim@example.com', department: 'English', status: 'Active' },
    { employeeId: 'T004', name: 'Ayesha Rahman', email: 'ayesha.rahman@example.com', department: 'Social Studies', status: 'Active' },
    { employeeId: 'T005', name: 'Salah Uddin', email: 'salah.uddin@example.com', department: 'Physics', status: 'Active' },
    { employeeId: 'T006', name: 'Fatima Begum', email: 'fatima.begum@example.com', department: 'Chemistry', status: 'Inactive' },
    { employeeId: 'T007', name: 'Md. Naimur Rahman', email: 'naimur.rahman@example.com', department: 'Biology', status: 'Active' },
    { employeeId: 'T008', name: 'Rashida Akter', email: 'rashida.akter@example.com', department: 'Geography', status: 'Active' },
    { employeeId: 'T009', name: 'Mohammad Ali', email: 'mohammad.ali@example.com', department: 'Bangla', status: 'Active' },
    { employeeId: 'T010', name: 'Shahed Hossain', email: 'shahed.hossain@example.com', department: 'Computer Science', status: 'Inactive' },
    { employeeId: 'T011', name: 'Shamsul Haque', email: 'shamsul.haque@example.com', department: 'Physical Education', status: 'Active' },
    { employeeId: 'T012', name: 'Nasima Sultana', email: 'nasima.sultana@example.com', department: 'History', status: 'Active' },
    { employeeId: 'T013', name: 'Mohammad Shahin', email: 'mohammad.shahin@example.com', department: 'Business Studies', status: 'Inactive' },
    { employeeId: 'T014', name: 'Nurjahan Begum', email: 'nurjahan.begum@example.com', department: 'Civics', status: 'Active' },
    { employeeId: 'T015', name: 'Jahangir Alam', email: 'jahangir.alam@example.com', department: 'Economics', status: 'Active' },
    { employeeId: 'T016', name: 'Tanveer Ahmed', email: 'tanveer.ahmed@example.com', department: 'Political Science', status: 'Inactive' },
    { employeeId: 'T017', name: 'Khaleda Sultana', email: 'khaleda.sultana@example.com', department: 'Urdu', status: 'Active' },
    { employeeId: 'T018', name: 'Aslam Hossain', email: 'aslam.hossain@example.com', department: 'Islamic Studies', status: 'Active' },
    { employeeId: 'T019', name: 'Farida Jahan', email: 'farida.jahan@example.com', department: 'Arts', status: 'Active' },
    { employeeId: 'T020', name: 'Akhtaruzzaman', email: 'akhtaruzzaman@example.com', department: 'ICT', status: 'Inactive' }
  ];
  

  newTeacher = {
    employeeId: '',
    name: '',
    email: '',
    department: '',
    status: 'Active'
  };

  isTeacherModalOpen = false;

  // Open Add Teacher Modal
  openAddTeacherModal() {
    this.isTeacherModalOpen = true;
  }

  // Close Add Teacher Modal
  closeTeacherModal() {
    this.isTeacherModalOpen = false;
  }

  // Add new teacher
  addTeacher() {
    if (this.newTeacher.employeeId && this.newTeacher.name && this.newTeacher.email && this.newTeacher.department) {
      this.teachers.push({ ...this.newTeacher });
      this.resetNewTeacher();
      this.closeTeacherModal();
    }
  }

  // Edit teacher
  editTeacher(teacher: any) {
    // You can implement edit logic here, like opening a modal pre-filled with teacher data
    console.log('Edit teacher', teacher);
  }

  // Delete teacher
  deleteTeacher(employeeId: string) {
    this.teachers = this.teachers.filter(teacher => teacher.employeeId !== employeeId);
  }

  // Reset the new teacher form
  resetNewTeacher() {
    this.newTeacher = {
      employeeId: '',
      name: '',
      email: '',
      department: '',
      status: 'Active'
    };
  }
}